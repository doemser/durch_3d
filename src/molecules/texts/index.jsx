import { Text } from "@react-three/drei";
import React from "react";

const Texts = ({ run, win, lose }) => {
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
				{win ? "you win!" : lose ? "you lose" : ""}
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
				{run ? "hit goal, not wall" : "press spacebar to start"}
			</Text>
		</>
	);
};

export default Texts;
