import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserProvider(props) {
	const [user, setUser] = useState(null);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (token) {
			fetch("/users/me", { headers: { Authorization: `Bearer ${token}` } }).then(
				(reponse) => {
					reponse.json().then((data) => {
						setUser(data.data);
						setIsLoading(false);
					});
				}
			);
			return;
		}
		setIsLoading(false);
	}, []);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{isLoading ? <h2>Loading...</h2> : props.children}
		</UserContext.Provider>
	);
}

// Dans la backend:
// Ajouter un route /users/me recoit le token et retourne l'utilisateur
// Envoyer le controller

// Dans le frontend:
// A chaque rendu de l'App, on veut tester si il y'a le token, et envoyer une requete pour récuperer l'utilisateur et le mettre dans le context
