async function post(route, data) {
	let reponse = await fetch(route, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	let reponseData = await reponse.json();

	return { data: reponseData, status: reponse.status };
}

export const Request = {
	post,
};
