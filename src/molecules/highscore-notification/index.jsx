import { Text } from "@react-three/drei";
import { colors } from "../../ions/styles/color-palette";
import React from "react";

const HighscoreNotification = ({ session }) => {
	return (
		<Text position={[0, -2, 1]} fontSize={1.05} color={colors.primaryContrastText}>
			{session ? `logged in and rankable` : `log in to rank`}
		</Text>
	);
};

export default HighscoreNotification;
