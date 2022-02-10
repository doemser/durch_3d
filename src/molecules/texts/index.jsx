import { Text } from "@react-three/drei";
import React from "react";
import { colors } from "../../ions/styles/color-palette";
import useStore from "../../ions/store";

const Texts = ({ gameState }) => {
	const moves = useStore(state => state.moves);
	const overallStats = useStore(state => state.overallStats);
	return (
		<>
			<Text
				castShadow
				anchorX="center"
				anchorY="middle"
				rotation={[-Math.PI / 4, 0, 0]}
				position={[0, -9.75, 3]}
				fontSize={0.4}
				color={colors.primaryContrastText}
			>
				total lives: {overallStats.lives} - moves: {overallStats.moves}
			</Text>
			<Text
				castShadow
				anchorX="center"
				anchorY="middle"
				rotation={[-Math.PI / 4, 0, 0]}
				position={[0, -7, 3]}
				fontSize={1.5}
				color={colors.primaryContrastText}
			>
				{gameState === "win" ? "you win!" : gameState === "lose" ? "you lose" : ""}
			</Text>
			<Text
				castShadow
				anchorX="center"
				anchorY="middle"
				rotation={[-Math.PI / 4, 0, 0]}
				position={[0, -8, 3]}
				fontSize={0.8}
				color={colors.primaryContrastText}
			>
				moves: {moves}
			</Text>
			<Text
				castShadow
				anchorX="center"
				anchorY="middle"
				rotation={[-Math.PI / 4, 0, 0]}
				position={[0, -9, 3]}
				fontSize={0.5}
				color={colors.primaryContrastText}
			>
				{gameState === "running"
					? "hit goal, not wall"
					: gameState === "win"
					? "press Enter for next level"
					: gameState === "lose"
					? "is that all you got?"
					: "press spacebar to start and play"}
			</Text>
		</>
	);
};

export default Texts;
