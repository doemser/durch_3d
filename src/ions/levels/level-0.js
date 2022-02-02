import { createLevel } from "./levels";
import { colors } from "../styles/color-palette";

createLevel({
	player: {
		position: [0, 0, 0],
		args: [0.5, 1.5, 4],
		color: colors.primaryLight,
		rotation: [0, 0, -45],
		metalness: "0.5",
		roughness: "0",
	},
});
