import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Auth from "../Auth/Auth";
import TodoList from "../TodoList/TodoList";

export default function Home() {
	const { user } = useContext(UserContext);
	return <div>{user === null ? <Auth /> : <TodoList />}</div>;
}
