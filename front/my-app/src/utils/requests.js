async function post(route, data) {
	let reponse = await fetch(route, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	let reponseData = await reponse.json();

	return reponseData;
}

export const Request = {
	post,
};
