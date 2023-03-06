import "./App.css";
import { useEffect, useState } from "react";
import Auth from "./components/pages/Auth/Auth";
import TodoList from "./components/pages/TodoList/TodoList";
function App() {
	const [user, setUser] = useState(null);
	return <div className="App">{user === null ? <Auth /> : <TodoList />}</div>;
}

export default App;

//Exercice 1:
//Créer un composant Auth
//Créer un composant TodoList

//Dans App.jsx:
//1. Créer un variable d'état user initialisée a null
//2. Utiliser un opérateur ternaire pour afficher Auth si user est null ou TodoList

//Exercice 2:
//Créer deux formulaire:
// 1. Inscription:
// 1.1 Un input pour l'email
// 1.2 Un input pour le mot de passe
// 1.3 Un input pour confirmer le mot de passe
// 1.4 Une fonction executée quand on clique sur le bouton: Affiche un alert

// 2. Connexion:
// 2.1 Un input pour l'email
// 2.2 Un input pour le mot de passe
// 2.3 Une fonction executée quand on clique sur le bouton: Affiche un alert

//Execice 3:
// Dans la back-end:
// 1. Utiliser la pattern MVC pour créer un route qui permet d'ajouter un utilisateur a la base de données
// Dans le front-end:
// 2. Utiliser fetch lors de l'inscription pour envoyer les données a la back-end
