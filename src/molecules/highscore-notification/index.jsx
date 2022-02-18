import { Text } from "@react-three/drei";
import { colors } from "../../ions/styles/color-palette";
import React from "react";
import UiLinkButton from "../ui-link-button";

const HighscoreNotification = ({ session, router }) => {
	return (
		<>
			<Text position={[0, -1, 1]} fontSize={0.8} color={colors.primaryContrastText}>
				{session ? `submit this to leaderboard?` : `sign in to rank next time!`}
			</Text>
			{session ? (
				<UiLinkButton
					args={[7, 2, 1]}
					position={[0, -3, 0]}
					type="highscoreSubmit"
					url="/leaderboard"
					router={router}
				>
					yeah! submit
				</UiLinkButton>
			) : null}
		</>
	);
};

export default HighscoreNotification;
