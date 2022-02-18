import UiLinkButton from "../ui-link-button";
import React from "react";

const UiNavigationButtons = ({ router }) => {
	return (
		<>
			<UiLinkButton
				args={[8, 2.5, 1]}
				position={[4.2, -6.5, 0]}
				router={router}
				type="restart"
				url="/play/0"
			>
				try again
			</UiLinkButton>
			<UiLinkButton
				args={[8, 2.5, 1]}
				position={[-4.2, -6.5, 0]}
				router={router}
				type="restart"
				url="/leaderboard"
			>
				leaderboard
			</UiLinkButton>
		</>
	);
};

export default UiNavigationButtons;
