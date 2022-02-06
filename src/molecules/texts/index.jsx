import { Text } from "@react-three/drei";
import React from "react";

const Texts = ({ gameState }) => {
	return (
		<>
			<Text
				castShadow
				anchorX="center"
				anchorY="middle"
				rotation={[-Math.PI / 4, 0, 0]}
				position={[0, 3, 0]}
				fontSize={2}
				color="black"
			>
				{gameState === "win" ? "you win!" : gameState === "lose" ? "you lose" : ""}
			</Text>
			<Text
				castShadow
				anchorX="center"
				anchorY="middle"
				rotation={[-Math.PI / 4, 0, 0]}
				position={[0, 1, 0]}
				fontSize={1}
				color="black"
			>
				{gameState === "running"
					? "hit goal, not wall"
					: gameState === "win"
					? "you did that really good"
					: gameState === "lose"
					? "is that all you got?"
					: "press spacebar to start and play"}
			</Text>
		</>
	);
};

export default Texts;
