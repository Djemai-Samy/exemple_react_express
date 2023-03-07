import { User } from "../models/User.js";
import jwt from "jsonwebtoken";

export async function addUser(req, reponse) {
	const { email, password } = req.body;

	//Tester si l'email existe, et retrouner status 401: message: User already exist
	const user = await User.findOne({ email: email });
	if (user) {
		reponse.status(401).json({ message: "Email already exist" });
		return;
	}
	const newUser = await User.create({ email: email, password: password });

	reponse.json({ user: newUser });
}

export async function loginUser(req, rep) {
	const { email, password } = req.body;

	//Verifier si l'email existe
	const user = await User.findOne({ email: email });

	//Si l'utilisateur n'existe pas on retourne la reponse avec le status 404
	if (!user) {
		rep.status(404).json({ message: "User not found" });
		return;
	}

	//Verifier si le mot de passe n'est pas bon  on retourne la reponse avec le status 401
	if (user.password != password) {
		rep.status(401).json({ message: "Password invalid" });
		return;
	}

	//Créer le token: payload, clé secrète, options
	const token = jwt.sign({ id: user._id }, "secret_key", { expiresIn: "7d" });

	//En plus: refresh_token

	rep.status(200).json({ user: user, token: token });
}

export async function sercretUser(req, rep) {
	//Bearer eymdlfmdf.sdfsdf.sdfsdf

	const token = req.headers.authorization.replace("Bearer ", "");

	jwt.verify(token, "secret_key", (err, payload) => {
		if (err) {
			rep.status(401).json({ message: "Token invalid" });
			return;
		}
		rep.status(200).json({ message: "Votre identifiant est: " + payload.id });
	});
}
