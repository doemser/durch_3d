import UiBackground from "../../atoms/ui-background";
import UiLinkButton from "../../molecules/ui-link-button";
import React from "react";
import useStore from "../../ions/store";
import { colors } from "../../ions/styles/color-palette";
import { Text } from "@react-three/drei";

const WinMenu = ({ router }) => {
	const overallStats = useStore(state => state.overallStats);
	return (
		<UiBackground>
			<Text
				anchorX="center"
				anchorY="middle"
				rotation={[0, 0, 0]}
				position={[0, 3.5, 1]}
				fontSize={1.05}
				color={colors.primaryContrastText}
			>
				YOU DID IT!
			</Text>
			<Text
				anchorX="center"
				anchorY="middle"
				rotation={[0, 0, 0]}
				position={[-3, 2, 1]}
				fontSize={1}
				color={colors.primaryContrastText}
			>
				deaths: {overallStats.deaths}
			</Text>
			<Text
				anchorX="center"
				anchorY="middle"
				rotation={[0, 0, 0]}
				position={[3, 2, 1]}
				fontSize={1}
				color={colors.primaryContrastText}
			>
				moves: {overallStats.moves}
			</Text>
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

/*
*
			<StyledFlexFit>
				{overallStats.levels === levels.length ? (
					<>
						<h2>you made it!</h2>
						<h4>
							you needed: <br />
							deaths: {overallStats.deaths}
							<br />
							moves: {overallStats.moves}
						</h4>
					</>
				) : (
					<>
						<h2>waaaait a second..</h2>
						<h4>you can´t just skip levels..</h4>
					</>
				)}

				<Link href="./play/0">
					<Button
						onClick={() => {
							setOverallStats("restart");
						}}
					>
						do it again
					</Button>
				</Link>
			</StyledFlexFit>*/
