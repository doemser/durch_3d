import { Text } from "@react-three/drei";
import { colors } from "../../ions/styles/color-palette";
import React from "react";

const HighscoreNotification = ({ session }) => {
	return (
		<Text position={[0, -2, 1]} fontSize={0.8} color={colors.primaryContrastText}>
			{session ? `check your rank on the leaderboard` : `sign in to rank on your next round!`}
		</Text>
	);
};

export default HighscoreNotification;
