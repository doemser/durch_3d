import useStore from "../store";
import { useEffect } from "react";

const UiControls = () => {
	useEffect(() => {
		const gameState = useStore.getState().gameState;
		const setGameState = useStore.getState().setGameState;

		const handleKeyDown = ({ code }) => {
			if (code === "Space") {
				if (gameState === "waiting" || gameState === "lose") {
					setGameState("running");
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
