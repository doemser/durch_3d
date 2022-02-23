import { Text } from "@react-three/drei";
import { colors } from "../../ions/styles/color-palette";
import React from "react";

const HighscoreNotification = ({ session }) => {
	return (
		<>
			<Text position={[0, -1.5, 0.3]} fontSize={0.8} color={colors.white}>
				{session
					? `take a look at where you ranked`
					: `sign in to rank on your next round!`}
			</Text>
			<Text position={[0, -5.7, 0.3]} fontSize={0.75} color={colors.white}>
				{session ? `or` : `and`}
			</Text>
		</>
	);
};

export default HighscoreNotification;
