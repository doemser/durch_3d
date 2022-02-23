import { Text } from "@react-three/drei";
import React from "react";
import { colors } from "../../ions/styles/color-palette";
import UiLinkButton from "../ui-link-button";

const OverlayTexts = ({ gameState, router }) => {
	return (
		<>
			{gameState === "lose" ? (
				<>
					<Text position={[0, 1, 6]} fontSize={0.8} color={colors.primaryContrastText}>
						failed!
					</Text>
					<Text position={[0, -1, 6]} fontSize={0.4} color={colors.primaryContrastText}>
						hit goal not wall
					</Text>
				</>
			) : null}
			{gameState === "win" ? (
				<UiLinkButton
					args={[4, 1.5, 0.5]}
					position={[0, -1.5, 3]}
					router={router}
					type="nextlevel"
					url="/play"
				>
					next level
				</UiLinkButton>
			) : null}
		</>
	);
};

export default OverlayTexts;
