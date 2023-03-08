import React from "react";
import Card from "../../containers/Card/Card";
import LoginForm from "../../containers/LoginForm/LoginForm";
import SignupForm from "../../containers/SignupForm/SignupForm";

export default function Auth() {
	return (
		<div>
			<Card>
				<LoginForm />
			</Card>

			<Card>
				<SignupForm />
			</Card>
		</div>
	);
}
