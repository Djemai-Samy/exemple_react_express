import React from "react";

export default function Card(props) {
	console.log(props);
	return (
		<div style={{ backgroundColor: "gray", margin: "1em", padding: "1em" }}>
			{props.children}
		</div>
	);
}
