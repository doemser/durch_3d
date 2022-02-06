import useStore from "../store";
import { useEffect } from "react";

const PlayerControls = () => {
	useEffect(() => {
		const changeDirection = useStore.getState().changeDirection;

		const handleKeyUp = ({ code }) => {
			if (code === "Space") {
				changeDirection(1);
			}
		};
		const handleKeyDown = ({ code }) => {
			if (code === "Space") {
				changeDirection(-1);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, []);

	return null;
};

export default PlayerControls;
