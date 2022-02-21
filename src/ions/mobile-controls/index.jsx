import useStore from "../store";
import { useEffect } from "react";

const MobileControls = () => {
	useEffect(() => {
		const changeDirection = useStore.getState().changeDirection;

		const handleMouseDown = () => {
			const gameState = useStore.getState().gameState;
			const setGameState = useStore.getState().setGameState;
			if (gameState === "waiting" || gameState === "lose") {
				setGameState("running");
			} else if (gameState === "running") {
				changeDirection(-1);
			}
		};
		const handleMouseUp = () => {
			const gameState = useStore.getState().gameState;
			if (gameState === "running") {
				changeDirection(1);
			}
		};

		const handleTouchMove = event_ => {
			event_.preventDefault();
		};

		window.addEventListener("touchstart", handleMouseDown, false);
		window.addEventListener("touchend", handleMouseUp, false);
		window.addEventListener("touchmove", handleTouchMove, false);
		return () => {
			window.removeEventListener("touchstart", handleMouseDown, false);
			window.removeEventListener("touchend", handleMouseUp, false);
			window.removeEventListener("touchmove", handleTouchMove, false);
		};
	}, []);

	return null;
};

export default MobileControls;
