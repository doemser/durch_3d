import useStore from "../store";
import { useEffect } from "react";

const UiControls = () => {
	useEffect(() => {
		const level = useStore.getState().level;
		const gameState = useStore.getState().gameState;
		const setGameState = useStore.getState().setGameState;

		const handleKeyDown = ({ code }) => {
			if (code === "Space") {
				if (gameState === "waiting" || gameState === "lose") {
					setGameState("running");
				}
			} else if (code === "Enter") {
				if (gameState === "win") {
					window.location = `./${Number.parseInt(level) + 1}`;
				}
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return null;
};

export default UiControls;
