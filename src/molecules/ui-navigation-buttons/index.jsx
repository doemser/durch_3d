import UiLinkButton from "../ui-link-button";
import React from "react";

const UiNavigationButtons = ({ router }) => {
	return (
		<>
			<UiLinkButton
				args={[8, 2.5, 1]}
				position={[0, -3.8, 0]}
				router={router}
				type="restart"
				url="/leaderboard"
			>
				leaderboard
			</UiLinkButton>
			<UiLinkButton
				args={[5, 2.5, 0.6]}
				position={[0, -7.7, 0]}
				router={router}
				type="restart"
				url="/play/0"
			>
				try again
			</UiLinkButton>
		</>
	);
};

export default UiNavigationButtons;
