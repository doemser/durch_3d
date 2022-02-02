import { createLevel } from "./levels";
import { colors } from "../styles/color-palette";

createLevel({
	player: {
		position: [-10, 4.5, 0],
		args: [0.5, 1.5, 4],
		color: colors.primaryLight,
		rotation: [0, 0, -45],
		metalness: "0.5",
		roughness: "0",
	},
	map: [
		{
			position: [0, -2.5, 0],
			args: [30, 3, 3],
			color: colors.primaryDark,
			rotation: 0,
			metalness: "0.3",
			roughness: "0.5",
		},
		{
			position: [0, 16.875, 0],
			args: [30, 3, 3],
			color: colors.primaryDark,
			rotation: 0,
			metalness: "0.3",
			roughness: "0.5",
		},
		{
			position: [-13.5, 6, 0],
			args: [3, 19, 3],
			color: colors.primaryDark,
			rotation: 0,
			metalness: "0.3",
			roughness: "0.5",
		},
		{
			position: [13.5, 6, 0],
			args: [3, 19, 3],
			color: colors.primaryDark,
			rotation: 0,
			metalness: "0.3",
			roughness: "0.5",
		},
		{
			position: [0, 7.5, -3],
			args: [30, 20, 3],
			color: colors.primaryMain,
			rotation: 0,
			metalness: "0.3",
			roughness: "0.5",
		},
	],
});
