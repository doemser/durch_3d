import { Text } from "@react-three/drei";
import { colors } from "../../ions/styles/color-palette";
import React from "react";

const UiButtonText = ({ children, args }) => {
	return (
		<Text
			castShadow
			anchorX="center"
			anchorY="middle"
			position={[0, 0, 1]}
			fontSize={args[1] / 3.33}
			color={colors.primaryContrastText}
		>
			{children}
		</Text>
	);
};

export default UiButtonText;
