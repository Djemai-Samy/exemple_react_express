import React, { useState } from "react";

export default function LoginForm() {
	//Créer les variables d'états pour stocker les entrées
	const [emailInput, setEmail] = useState("");
	const [passwordInput, setPassword] = useState("");

	//La fonction qui s'execute quand l"utilisateur tape dans l'input email
	function handleEmail(e) {
		//Utiliser la fonction qui permet de modifier la variable d'état
		setEmail(e.target.value);
	}

	function handlePassword(e) {
		setPassword(e.target.value);
	}

	function login(e) {
		//La fonction preventDefault permet de na pas rafraichir la page
		e.preventDefault();
		console.log("Login");
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

				<button onClick={login}>Valider</button>
			</form>
		</div>
	);
}
