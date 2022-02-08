import { Text } from "@react-three/drei";
import React from "react";
import { colors } from "../../ions/styles/color-palette";

const Texts = ({ gameState }) => {
	return (
		<>
			<Text
				castShadow
				anchorX="center"
				anchorY="middle"
				rotation={[-Math.PI / 4, 0, 0]}
				position={[0, -6, 3]}
				fontSize={2}
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
				fontSize={1}
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
