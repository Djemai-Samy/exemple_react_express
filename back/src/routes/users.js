import express from "express";
import { addUser, loginUser, sercretUser } from "../controllers/users.js";

export const usersRouter = express.Router();

usersRouter.post("/signup", addUser);

usersRouter.post("/login", loginUser);

usersRouter.get("/secret", sercretUser);
