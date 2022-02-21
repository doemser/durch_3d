import { Text } from "@react-three/drei";
import React from "react";
import { colors } from "../../ions/styles/color-palette";
import useStore from "../../ions/store";
import levels from "../../ions/levels";
import UiLinkButton from "../ui-link-button";

const OverlayTexts = ({ gameState, router }) => {
	const moves = useStore(state => state.moves);
	const overallStats = useStore(state => state.overallStats);
	return (
		<>
			<Text position={[0, 7.9, 6]} fontSize={0.35} color={colors.primaryContrastText}>
				{overallStats.levels}/{levels.length - 1}
			</Text>
			<Text position={[0, 7.4, 6]} fontSize={0.4} color={colors.primaryContrastText}>
				moves: {overallStats.moves}
				{"  "}|{"  "}deaths: {overallStats.deaths}
			</Text>

			<Text position={[0, 1, 6]} fontSize={0.8} color={colors.primaryContrastText}>
				{gameState === "win" ? `passed!` : gameState === "lose" ? "failed!" : ""}
			</Text>
			<Text
				position={gameState === "win" ? [0, 0, 6] : [0, -7.5, 6]}
				fontSize={0.5}
				color={colors.primaryContrastText}
			>
				moves: {moves}
			</Text>
			<Text
				position={gameState === "win" ? [0, -2.4, 6] : [0, -8, 6]}
				fontSize={0.4}
				color={colors.primaryContrastText}
			>
				{gameState === "running"
					? "hit goal, not wall"
					: gameState === "win"
					? "or press ENTER"
					: gameState === "lose"
					? `${overallStats.deaths} ${
							overallStats.deaths === 1 ? "death" : "deaths"
					  } already`
					: "SPACEBAR to start and play"}
			</Text>
			{gameState === "win" ? (
				<UiLinkButton
					args={[4, 1.5, 0.5]}
					position={[0, -1.5, 3]}
					router={router}
					type="nextlevel"
					url="/play"
				>
					next Level
				</UiLinkButton>
			) : null}
		</>
	);
};

export default OverlayTexts;
