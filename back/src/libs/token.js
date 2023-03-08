import jwt from "jsonwebtoken";
const secret_key = "secret_key";

//Fonction que sign un jwt token et le retourne
function signToken(payload) {
	const token = jwt.sign(payload, secret_key, { expiresIn: "7d" });

	return token;
}

function verifyToken(headerToken, callback) {
	const token = headerToken.replace("Bearer ", "");
	jwt.verify(token, secret_key, (err, payload) => {
		callback(err, payload);
	});
}

const token = {
	signToken: signToken,
	verifyToken: verifyToken,
};

export default token;
