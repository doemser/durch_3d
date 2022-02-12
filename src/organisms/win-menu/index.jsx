import UiBackground from "../../atoms/ui-background";
import UiLinkButton from "../../molecules/ui-link-button";
import React from "react";
import useStore from "../../ions/store";
import { colors } from "../../ions/styles/color-palette";
import { Text } from "@react-three/drei";
import levels from "../../ions/levels";
import GameTitle from "../../molecules/game-title";

const WinMenu = ({ router }) => {
	const overallStats = useStore(state => state.overallStats);
	return (
		<UiBackground>
			<GameTitle titlePosition={[0, 7, 1]} subTitlePosition={[0, 5.5, 1]} fontSize={2.5} />
			{overallStats.levels === levels.length ? (
				<group>
					<Text position={[0, 3.5, 1]} fontSize={1.05} color={colors.primaryContrastText}>
						YOU DID IT!
					</Text>
					<Text position={[2, 1, 1]} fontSize={1} color={colors.primaryContrastText}>
						{overallStats.deaths}
					</Text>
					<Text position={[2, 0, 1]} fontSize={1} color={colors.primaryContrastText}>
						{overallStats.deaths === 1 ? "death" : "deaths"}
					</Text>
					<Text position={[-2, 1, 1]} fontSize={1} color={colors.primaryContrastText}>
						{overallStats.moves}
					</Text>
					<Text position={[-2, 0, 1]} fontSize={1} color={colors.primaryContrastText}>
						moves
					</Text>
				</group>
			) : (
				<group>
					<Text position={[0, 3.5, 1]} fontSize={1.05} color={colors.primaryContrastText}>
						WAIT A SECOND!
					</Text>
					<Text position={[0, 1, 1]} fontSize={1} color={colors.primaryContrastText}>
						You can&apos;t just skip {levels.length - overallStats.levels} levels!
					</Text>
				</group>
			)}

			<UiLinkButton
				args={[8, 3.2, 1]}
				position={[0, -3, 0]}
				router={router}
				type="restart"
				url="/play/0"
			>
				try again
			</UiLinkButton>
			<UiLinkButton
				args={[5, 2, 1]}
				position={[0, -6.5, 0]}
				router={router}
				type="restart"
				url="/"
			>
				back
			</UiLinkButton>
		</UiBackground>
	);
};

export default WinMenu;
