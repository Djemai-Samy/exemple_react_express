import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
	name: String,
	completed: Boolean,
	date: String,
});

//Schema: reprentation des données dans la base donnée
const userSchema = mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	todos: [todoSchema],
});

export const User = mongoose.model("User", userSchema);
