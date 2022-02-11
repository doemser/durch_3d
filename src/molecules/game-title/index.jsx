import { Text } from "@react-three/drei";
import { colors } from "../../ions/styles/color-palette";
import React from "react";

const GameTitle = () => {
	return (
		<group anchorX="center" anchorY="middle">
			<Text position={[0, 7, 1]} fontSize={2.5} color={colors.playerColor}>
				DURCH
			</Text>
			<Text position={[0, 5.5, 1]} fontSize={0.7} color={colors.primaryContrastText}>
				a little game about shooting through.
			</Text>
		</group>
	);
};

export default GameTitle;
