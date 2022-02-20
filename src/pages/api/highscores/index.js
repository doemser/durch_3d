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

		case "PUT":
			if (!session) {
				response.status(401).send("Lol.. you thought i would let this happen?");
			} else {
				try {
					console.log("try body request", request.body);
					const mongoResponse = await Highscore.findOneAndUpdate(
						{ user: request.body.user },
						request.body,
						{
							new: true,
						}
					);
					console.log("mongoDB response", mongoResponse);
					response.status(200).json(mongoResponse);
				} catch (err) {
					console.log(err);
					response.status(403).json({ message: "ups, something went wrong" });
				}
			}
			break;

		default:
			response.status(404).send("not found");
	}
};

export default handler;
