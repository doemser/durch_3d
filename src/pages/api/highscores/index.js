import Highscore from "../../../../model/highscores.model";
import dbConnect from "../../../../database/index";
import { getSession } from "next-auth/react";

const handler = async (request, response) => {
	const { method } = request;
	await dbConnect();
	const session = await getSession({ req: request });

	switch (method) {
		case "GET":
			try {
				const mongoResponse = await Highscore.find();
				response.status(200).json(mongoResponse);
			} catch (err) {
				console.log(err);
				response.status(500).send("nope, that was not what's supposed to happen..");
			}
			break;

		case "POST":
			if (!session) {
				response.status(401).send("Lol.. you thought i would let this happen?");
			} else {
				try {
					const mongoResponse = await Highscore.create(request.body);
					console.log("mongoDB response", mongoResponse);
					response.status(200).json(mongoResponse);
				} catch (err) {
					console.log(err);
					response.status(403).send("well.. that did not work");
				}
			}
			break;

		//update content of specific note
		case "PUT":
			try {
				console.log("try body request", request.body);
				const mongoResponse = await Highscore.findByIdAndUpdate(request.body.noteId, {
					content: request.body.content,
				});
				console.log("mongoDB response", mongoResponse);
				response.status(200).json(mongoResponse);
			} catch (err) {
				console.log(err);
				response.status(403).send("ups, something went wrong");
			}
			break;

		case "DELETE":
			try {
				console.log("try delete: delete is called");
				console.log("try to get info about request bodynote: ", request.query.noteId);
				const mongoResponse = await Highscore.findByIdAndDelete({
					_id: request.query.noteId,
				});
				console.log("mongoDB response", mongoResponse);
				response.status(200).json(mongoResponse);
			} catch (err) {
				console.log(err);
				response.status(403).send("ups, something went wrong");
			}
			break;

		default:
			response.status(404).send("not found");
	}
};

export default handler;
