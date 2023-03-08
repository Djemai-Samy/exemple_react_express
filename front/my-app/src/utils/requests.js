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

async function postAuthorization(route, data, method){
  const token = localStorage.getItem('token');
  let reponse = await fetch(route, {
    method: method,
    headers:{
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify(data)
  });

  let reponseData = await reponse.json();
  return {data: reponseData, status: reponse.status}
}

export const Request = {
	post,
  postAuthorization
};
