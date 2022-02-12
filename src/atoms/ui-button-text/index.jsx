import { Text } from "@react-three/drei";
import React from "react";

const UiButtonText = ({ children, args, color = "white" }) => {
	return (
		<Text position={[0, 0, 1]} fontSize={args[1] / 3.33} color={color}>
			{children}
		</Text>
	);
};

export default UiButtonText;
