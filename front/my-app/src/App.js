import "./App.css";

import UserProvider from "./components/contexts/UserContext";
import Home from "./components/pages/Home/Home";
function App() {
	return (
		<div className="App">
			<UserProvider>
				<Home />
			</UserProvider>
		</div>
	);
}

export default App;

// {user:user, setUser:setUser} => {user, setUser}
// Exercice 1:
// Deux méthodes pour partager user et setUser aux autres composants:
// 1. On peut utiliser un contexte.
// 2. Utiliser les props.