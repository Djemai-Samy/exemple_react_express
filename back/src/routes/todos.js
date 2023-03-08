import express from "express";
import { addTodo, deleteTodo, updateTodo } from "../controllers/todos.js";

export const todosRouter = express.Router();

// todosRouter.get("/", getTodos);

todosRouter.post("/", addTodo);

todosRouter.delete("/:id", deleteTodo);

todosRouter.put("/:id", updateTodo);
