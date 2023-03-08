import { User } from "../models/User.js";
import token from "../libs/token.js";

//Dans un ca concret:
//Avoir un serveur email pour envoyer des email et validé qu'il existent
export async function addUser(req, reponse) {
	console.log(req.body);
	const { email, password } = req.body;

	//Tester si l'email existe, et retrouner status 401: message: User already exist
	const user = await User.findOne({ email: email });
	if (user) {
		reponse.status(401).json({ message: "Email already exist" });
		return;
	}
	const newUser = await User.create({ email: email, password: password });

	reponse.json({ message: "Inscription réussie!" });
}

export async function loginUser(req, rep) {
	const { email, password } = req.body;

	//Verifier si l'email existe
	const user = await User.findOne({ email: email });

	console.log(user);
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
	const userToken = token.signToken({ id: user._id });
	//En plus: refresh_token

	rep.status(200).json({ user: { email: user.email }, token: userToken });
}

export async function sercretUser(req, rep) {
	//Bearer eymdlfmdf.sdfsdf.sdfsdf

	const headerToken = req.headers.authorization;

	token.verifyToken(headerToken, (err, payload) => {
		if (err) {
			rep.status(401).json({ message: "Token invalid" });
			return;
		}
		rep.status(200).json({ message: "Votre identifiant est: " + payload.id });
	});
}

export async function getUser(req, rep) {
	const headerToken = req.headers.authorization;

	token.verifyToken(headerToken, async (err, payload) => {
		if (err) {
			rep.status(401).json({ message: "Token invalid" });
			return;
		}
		const user = await User.findById(payload.id);

		rep.status(200).json({ data: { email: user.email } });
	});
}
