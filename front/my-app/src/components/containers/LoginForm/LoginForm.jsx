import React, { useContext, useState } from "react";
import { Request } from "../../../utils/requests";
import { UserContext } from "../../contexts/UserContext";

export default function LoginForm() {
	const monContext = useContext(UserContext);

	//Créer les variables d'états pour stocker les entrées
	const [emailInput, setEmail] = useState("");
	const [passwordInput, setPassword] = useState("");

	const [loginMeassage, setloginMeassage] = useState("");

	//La fonction qui s'execute quand l"utilisateur tape dans l'input email
	function handleEmail(e) {
		//Utiliser la fonction qui permet de modifier la variable d'état
		setEmail(e.target.value);
	}

	function handlePassword(e) {
		setPassword(e.target.value);
	}

	async function login(e) {
		//La fonction preventDefault permet de ne pas rafraichir la page
		e.preventDefault();

		//Faire une requete pour connecter l'utilisateur
		const reponseData = await Request.post("/users/login", {
			email: emailInput,
			password: passwordInput,
		});
		if (reponseData.status === 200) {
			localStorage.setItem("token", reponseData.data.token);
			//utiliser la fonction setUser
			monContext.setUser(reponseData.data.user);
			return;
		}

		//Créer une varibles d'état
		//Changer la variable d'état
		setloginMeassage("Email ou mot de passe invalides!");
	}
	return (
		<div>
			<h2>Connexion</h2>
			<form>
				<input
					autoComplete="email"
					placeholder="Email"
					value={emailInput}
					onChange={handleEmail}
				/>
				<input
					autoComplete="current-password"
					placeholder="Mot de passe"
					type="password"
					value={passwordInput}
					onChange={handlePassword}
				/>
				<button onClick={login}>Valider</button>
				<p>{loginMeassage}</p>
			</form>
		</div>
	);
}
