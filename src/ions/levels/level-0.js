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
			id: "d6dea942-4453-48c9-a66a-2d54fcc44e56",
		},
		{
			position: [0, 16.875, 0],
			args: [30, 3, 3],
			color: colors.primaryDark,
			rotation: 0,
			metalness: "0.3",
			roughness: "0.5",
			id: "e3929515-9072-44ab-a035-89ce6dab74d8",
		},
		{
			position: [-13.5, 6, 0],
			args: [3, 19, 3],
			color: colors.primaryDark,
			rotation: 0,
			metalness: "0.3",
			roughness: "0.5",
			id: "b39f4a08-9f41-400d-9e65-ac8fc4139195",
		},
		{
			position: [13.5, 6, 0],
			args: [3, 19, 3],
			color: colors.primaryDark,
			rotation: 0,
			metalness: "0.3",
			roughness: "0.5",
			id: "0221f5c7-528d-49bc-9560-ea75b0024478",
		},
		{
			position: [0, 7.5, -3],
			args: [30, 20, 3],
			color: colors.primaryMain,
			rotation: 0,
			metalness: "0.3",
			roughness: "0.5",
			id: "1ab39890-3ebb-4ba8-af82-310497158718",
		},
	],
});
