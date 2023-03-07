import React, { useState } from "react";
import { Request } from "../../../utils/requests";
export default function SignupForm() {
	//Créer les variables d'états pour stocker les entrées
	const [emailInput, setEmail] = useState("");
	const [passwordInput, setPassword] = useState("");
	const [confirmPasswordInput, setConfirmPassword] = useState("");

	//Variable d'état pour le message
	const [signupMessage, setSignupMessage] = useState("");

	//La fonction qui s'execute quand l"utilisateur tape dans l'input email
	function handleEmail(e) {
		//Utiliser la fonction qui permet de modifier la variable d'état
		setEmail(e.target.value);
	}

	function handlePassword(e) {
		setPassword(e.target.value);
	}

	function handleConfirmPassword(e) {
		setConfirmPassword(e.target.value);
	}

	async function signup(e) {
		//La fonction preventDefault permet de na pas rafraichir la page
		e.preventDefault();

		let data = await Request.post("/users/signup", {
			email: emailInput,
			password: passwordInput,
		});

		const leStatus = data.status;

		if (leStatus === 401) {
			setSignupMessage("Votre email existe, connectez-vous!");
			return;
		}
		setSignupMessage("Inscription réussie!");
	}

	return (
		<div>
			<h2>Inscription</h2>
			<form>
				<input
					autoComplete="email"
					placeholder="Email"
					value={emailInput}
					onChange={handleEmail}
				/>
				<input
					autoComplete="new-password"
					placeholder="Mot de passe"
					type="password"
					value={passwordInput}
					onChange={handlePassword}
				/>
				<input
					autoComplete="new-password"
					placeholder="Confirmez le mot de passe"
					type="password"
					value={confirmPasswordInput}
					onChange={handleConfirmPassword}
				/>
				<button onClick={signup}>Valider</button>
				<p>{signupMessage}</p>
			</form>
		</div>
	);
}
