import { User } from "../models/User.js";

export async function addUser(req, reponse) {
	const { email, password } = req.body;

	const newUser = await User.create({ email: email, password: password });

	reponse.json({ user: newUser });
}
