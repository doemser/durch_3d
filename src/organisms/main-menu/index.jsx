import UiBackground from "../../atoms/ui-background";
import UiLinkButton from "../../molecules/ui-link-button";
import React from "react";
import GameTitle from "../../molecules/game-title";

const MainMenu = ({ router }) => {
	return (
		<UiBackground>
			<GameTitle
				titlePosition={[0, 7, 0.3]}
				subTitlePosition={[0, 5.5, 0.3]}
				fontSize={2.5}
			/>
			<UiLinkButton
				args={[8, 3, 1]}
				position={[0, 2, 0]}
				router={router}
				type="intern"
				url="/play/0"
			>
				new game
			</UiLinkButton>
			<UiLinkButton
				args={[8, 3, 1]}
				position={[0, -2, 0]}
				router={router}
				type="intern"
				url="/leaderboard"
			>
				leaderboard
			</UiLinkButton>
			<UiLinkButton
				args={[5, 2, 1]}
				position={[0, -6, 0]}
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
