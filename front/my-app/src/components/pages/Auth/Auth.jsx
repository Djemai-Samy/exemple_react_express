import React from "react";
import LoginForm from "../../containers/LoginForm/LoginForm";
import SignupForm from "../../containers/SignupForm/SignupForm";

export default function Auth() {
	return (
		<div>
			<LoginForm />
			<SignupForm />
		</div>
	);
}
