import UiLinkButton from "../ui-link-button";
import React from "react";

const UiNavigationButtons = ({ router }) => {
	return (
		<>
			<UiLinkButton
				args={[8, 3.2, 1]}
				position={[4.2, -6.5, 0]}
				router={router}
				type="restart"
				url="/play/0"
			>
				try again
			</UiLinkButton>
			<UiLinkButton
				args={[8, 3.2, 1]}
				position={[-4.2, -6.5, 0]}
				router={router}
				type="restart"
				url="/"
			>
				back
			</UiLinkButton>
		</>
	);
};

export default UiNavigationButtons;
