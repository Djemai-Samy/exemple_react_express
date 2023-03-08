import token from "../libs/token.js";
import { User } from "../models/User.js";
import mongoose from "mongoose";

export async function addTodo(req, rep) {
	const authorization = req.headers.authorization;

	token.verifyToken(authorization, async (err, payload) => {

    if(err){
      rep.status(401).json({message:"Token invalid!"})
      return;
    }
		const { name, completed } = req.body;

		const user = await User.findById(payload.id);

		user.todos.push({ name: name, completed: completed, date: Date.now() });

		user.save();

		rep.status(200).json({ user: {email: user.email, todo:user.todos} });
	});
}

export async function deleteTodo(req, rep) {
	const authorization = req.headers.authorization;

	token.verifyToken(authorization, async (err, payload) => {
    if(err){
      rep.status(401).json({message:"Token invalid!"})
      return;
    }
		const { id } = req.params;

		const user = await User.findByIdAndUpdate(
			payload.id,
			{
				$pull: { todos: { _id: id } },
			},
			{ new: true }
		);

		rep.status(200).json({ user: {email: user.email, todo:user.todos} });
	});
}

export async function updateTodo(req, rep){
  const authorization = req.headers.authorization;
  token.verifyToken(authorization, async (err, payload) => {
    if(err){
      rep.status(401).json({message:"Token invalid!"})
      return;
    }
		const { id } = req.params;

		const user = await User.updateOne(
      {_id: payload.id},
      {
        $set: {"todos.$[todo].completed": true},
      },
      { arrayFilters: [{"todo._id": id}]}
    );
		rep.status(200).json({ user: user });
	});
}

// console.log((new mongoose.Types.ObjectId("4eb6e7e7e9b7f4194e000001")).toHexString());
