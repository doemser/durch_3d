import useStore from "../../ions/store";
import { Text } from "@react-three/drei";
import { colors } from "../../ions/styles/color-palette";
import React from "react";

const WinNotification = () => {
	const overallStats = useStore(state => state.overallStats);
	return (
		<group>
			<Text position={[0, 3.5, 0.3]} fontSize={1.05} color={colors.white}>
				YOU DID IT!
			</Text>
			<Text position={[0, 1.5, 0.3]} fontSize={1} color={colors.white}>
				{overallStats.deaths}
			</Text>
			<Text position={[0, 0.5, 0.3]} fontSize={0.9} color={colors.white}>
				{overallStats.deaths === 1 ? "death" : "deaths"}
			</Text>
			<Text position={[-4, 1.5, 0.3]} fontSize={1} color={colors.white}>
				{overallStats.moves}
			</Text>
			<Text position={[-4, 0.5, 0.3]} fontSize={0.9} color={colors.white}>
				moves
			</Text>
			<Text position={[4, 1.5, 0.3]} fontSize={1} color={colors.white}>
				{overallStats.score}
			</Text>
			<Text position={[4, 0.5, 0.3]} fontSize={0.9} color={colors.white}>
				score
			</Text>
		</group>
	);
};

export default WinNotification;
