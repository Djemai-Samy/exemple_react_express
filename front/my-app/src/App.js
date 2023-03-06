import "./App.css";
import { useEffect, useState } from "react";
function App() {
	const [message, setMessage] = useState("");

	useEffect(() => {
		fetch("/bonjour").then((reponse) => {
			console.log(reponse);
			reponse.json().then((data) => {
				setMessage(data.message);
			});
		});
	}, []);

	return (
		<div className="App">
			<p>{message}</p>
		</div>
	);
}

export default App;
