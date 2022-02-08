import { Text } from "@react-three/drei";
import React from "react";

const LevelText = ({ level, position, color, size }) => {
	return (
		<Text
			castShadow
			receiveShadow
			anchorX="center"
			anchorY="middle"
			position={position}
			fontSize={size}
			color={color}
		>
			lvl{level}
		</Text>
	);
};

export default LevelText;
