import mongoose from "mongoose";
//Schema: reprentation des données dans la base donnée
const userSchema = mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

export const User = mongoose.model("User", userSchema);
