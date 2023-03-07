import React, { useState } from "react";
import { Request } from "../../../utils/requests";
export default function SignupForm() {
	//Créer les variables d'états pour stocker les entrées
	const [emailInput, setEmail] = useState("");
	const [passwordInput, setPassword] = useState("");
	const [confirmPasswordInput, setConfirmPassword] = useState("");

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
		console.log(data);
	}

	return (
		<div>
			<h2>Inscription</h2>
			<form>
				<input placeholder="Email" value={emailInput} onChange={handleEmail} />
				<input
					placeholder="Mot de passe"
					type="password"
					value={passwordInput}
					onChange={handlePassword}
				/>
				<input
					placeholder="Confirmez le mot de passe"
					type="password"
					value={confirmPasswordInput}
					onChange={handleConfirmPassword}
				/>
				<button onClick={signup}>Valider</button>
			</form>
		</div>
	);
}
