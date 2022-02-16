import { Text } from "@react-three/drei";
import { colors } from "../../ions/styles/color-palette";
import React from "react";

const CheatNotification = () => {
	return (
		<group>
			<Text position={[0, 3.5, 1]} fontSize={1.05} color={colors.primaryContrastText}>
				WAIT A SECOND!
			</Text>
			<Text position={[0, 1, 1]} fontSize={1} color={colors.primaryContrastText}>
				I know what you did..
			</Text>
			<Text position={[0, -0.5, 1]} fontSize={1} color={colors.primaryContrastText}>
				don&apos;t do that.
			</Text>
		</group>
	);
};

export default CheatNotification;
