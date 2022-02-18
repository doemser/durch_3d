import UiBackground from "../../atoms/ui-background";
import React from "react";
import useStore from "../../ions/store";
import levels from "../../ions/levels";
import GameTitle from "../../molecules/game-title";
import WinNotification from "../../molecules/win-notifaction";
import CheatNotification from "../../molecules/cheat-notification";
import HighscoreNotification from "../../molecules/highscore-notification";
import UiNavigationButtons from "../../molecules/ui-navigation-buttons";

const WinMenu = ({ router }) => {
	const session = useStore(state => state.session);
	const overallStats = useStore(state => state.overallStats);
	return (
		<UiBackground>
			<GameTitle titlePosition={[0, 7, 1]} subTitlePosition={[0, 5.5, 1]} fontSize={2.5} />

			{overallStats.levels === levels.length ? (
				<>
					<WinNotification />
					<HighscoreNotification session={session} router={router} />
				</>
			) : (
				<CheatNotification />
			)}
			<UiNavigationButtons router={router} />
		</UiBackground>
	);
};

export default WinMenu;
