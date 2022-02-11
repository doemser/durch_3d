import UiBackground from "../../atoms/ui-background";
import UiLinkButton from "../../molecules/ui-link-button";
import React from "react";

const MainMenu = ({ router }) => {
	return (
		<UiBackground>
			<UiLinkButton
				args={[8, 3.2, 1]}
				position={[0, 0, 0]}
				rotation={[0, 0, 0]}
				router={router}
				type="intern"
				url="/play/0"
			>
				new game
			</UiLinkButton>
			<UiLinkButton
				args={[5, 2, 1]}
				position={[0, -3.5, 0]}
				rotation={[0, 0, 0]}
				router={router}
				type="extern"
				url="https://github.com/doemser"
			>
				credits
			</UiLinkButton>
		</UiBackground>
	);
};

export default MainMenu;
