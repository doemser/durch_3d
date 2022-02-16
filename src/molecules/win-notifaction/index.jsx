import useStore from "../../ions/store";
import { Text } from "@react-three/drei";
import { colors } from "../../ions/styles/color-palette";
import React from "react";

const WinNotification = () => {
	const overallStats = useStore(state => state.overallStats);
	return (
		<group>
			<Text position={[0, 3.5, 1]} fontSize={1.05} color={colors.primaryContrastText}>
				YOU DID IT!
			</Text>
			<Text position={[0, 1.5, 1]} fontSize={1} color={colors.primaryContrastText}>
				{overallStats.deaths}
			</Text>
			<Text position={[0, 0.5, 1]} fontSize={0.9} color={colors.primaryContrastText}>
				{overallStats.deaths === 1 ? "death" : "deaths"}
			</Text>
			<Text position={[-4, 1.5, 1]} fontSize={1} color={colors.primaryContrastText}>
				{overallStats.moves}
			</Text>
			<Text position={[-4, 0.5, 1]} fontSize={0.9} color={colors.primaryContrastText}>
				moves
			</Text>
			<Text position={[4, 1.5, 1]} fontSize={1} color={colors.primaryContrastText}>
				{overallStats.score}
			</Text>
			<Text position={[4, 0.5, 1]} fontSize={0.9} color={colors.primaryContrastText}>
				score
			</Text>
		</group>
	);
};

export default WinNotification;
