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
				{run && !win && !lose
					? "hit goal, not wall"
					: !run && win && !lose
					? "you did that really good"
					: !run && !win && lose
					? "is that all you got?"
					: "press spacebar to start and play"}
			</Text>
		</>
	);
};

export default Texts;
