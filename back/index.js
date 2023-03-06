import express from "express";
import mongoose from "mongoose";
import { usersRouter } from "./src/routes/users.js";
const app = express();
const port = 3001;

app.use(express.json());

// requete sur /users/signup
app.use("/users", usersRouter);

mongoose.connect("mongodb://127.0.0.1:27017").then(() => {
	app.listen(port, () => {
		console.log("Serveur lancé sur le port: " + port);
	});
});


 
  
