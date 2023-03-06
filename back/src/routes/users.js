import express from "express";
import { addUser } from "../controllers/users.js";

export const usersRouter = express.Router();

usersRouter.post("/signup", addUser);
