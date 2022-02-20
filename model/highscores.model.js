import mongoose from "mongoose";

const highscoreSchema = new mongoose.Schema(
	{
		name: String,
		user: {
			type: String,
			unique: true,
		},
		image: String,
		score: Number,
		moves: Number,
		deaths: Number,
	},
	{ timestamps: true }
);

export default mongoose.models.Highscore || mongoose.model("Highscore", highscoreSchema);
