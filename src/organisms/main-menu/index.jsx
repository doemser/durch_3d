import UiBackground from "../../atoms/ui-background";
import UiButton from "../../molecules/ui-button";
import React from "react";

const MainMenu = ({ router }) => {
	return (
		<>
			<UiBackground />
			<UiButton
				args={[10, 4, 1]}
				position={[0, 2.5, 0]}
				rotation={[0, 0.15, 0]}
				router={router}
				type="intern"
				url="/play/0"
			>
				new game
			</UiButton>
			<UiButton
				args={[5, 2, 1]}
				position={[0, -2.5, 0]}
				rotation={[0, -0.15, 0]}
				router={router}
				type="extern"
				url="https://github.com/doemser"
			>
				credits
			</UiButton>
		</>
	);
};

export default MainMenu;
