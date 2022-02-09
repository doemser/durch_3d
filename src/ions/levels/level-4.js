import { createLevel } from "./levels";
import { colors } from "../styles/color-palette";

createLevel({
	levelNumber: {
		position: [-9, 1, -1.3],
		color: colors.black,
		size: 2,
	},
	player: {
		position: [-10, 2, 0],
		args: [0.5, 64, 64],
		color: colors.playerColor,
		speed: 0.15,
		metalness: "0.5",
		roughness: "0",
	},
	goal: {
		position: [11.75, 8, 0],
		args: [0.5, 2, 2],
		color: colors.goalColor,
		metalness: "0.5",
		roughness: "0",
	},
	map: [
		{
			position: [0, -2.5, 0],
			args: [30, 3, 3],
			color: colors.primaryDark,
			metalness: "0.3",
			roughness: "0.5",
			id: "1f841b3d-1799-4de2-85b0-cd971ddf2c4d",
		},
		{
			position: [0, 16.875, 0],
			args: [30, 3, 3],
			color: colors.primaryDark,
			metalness: "0.3",
			roughness: "0.5",
			id: "3226911e-474f-4d28-99f9-2109227393eb",
		},
		{
			position: [-13.5, 6, 0],
			args: [3, 19, 3],
			color: colors.primaryDark,
			metalness: "0.3",
			roughness: "0.5",
			id: "327655f2-d6bd-4beb-b10c-41117f77f093",
		},
		{
			position: [13.5, 6, 0],
			args: [3, 19, 3],
			color: colors.primaryDark,
			metalness: "0.3",
			roughness: "0.5",
			id: "5cc58df3-41f7-40bb-aa00-11ffbdd07942",
		},
		{
			position: [0, 7.5, -3],
			args: [30, 20, 3],
			color: colors.primaryMain,
			metalness: "0.3",
			roughness: "0.5",
			id: "bf6c3222-8ab6-4018-bd74-7a7e92b2637d",
		},
	],
	rotating: [
		{
			position: [1, 7, 2],
			args: [10.5, 2, 1],
			rotation: [0.04, 0.6, 0],
			axis: [null, null, { direction: 1, speed: 2 }],
			color: "#f0932b",
			metalness: "0.3",
			roughness: "0.5",
			id: "02aaa9fa-6ba3-4d3e-9f0a-3a5c6f3ac37d",
		},
	],
});
