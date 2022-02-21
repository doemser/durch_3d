import useStore from "../store";
import { useEffect } from "react";
import { useRouter } from "next/router";

const UiControls = () => {
	const router = useRouter();

	useEffect(() => {
		const handleKeyDown = ({ code }) => {
			const gameState = useStore.getState().gameState;
			const level = useStore.getState().level;
			const setGameState = useStore.getState().setGameState;
			const setOverallStats = useStore.getState().setOverallStats;
			const resetMoves = useStore.getState().resetMoves;

			if (code === "Space" && (gameState === "waiting" || gameState === "lose")) {
				setGameState("running");
			}
			if (code === "Enter" && gameState === "win") {
				router.push(`/play/${parseInt(level) + 1}`);
				setGameState("waiting");
				setOverallStats(gameState);
				resetMoves();
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
