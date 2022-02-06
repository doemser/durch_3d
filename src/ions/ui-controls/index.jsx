import useStore from "../store";
import { useEffect } from "react";

const UiControls = () => {
	useEffect(() => {
		const run = useStore.getState().run;
		const lose = useStore.getState().lose;
		const setRun = useStore.getState().setRun;
		const setLose = useStore.getState().setLose;
		const changeDirection = useStore.getState().changeDirection;

		const handleKeyUp = ({ code }) => {
			if (code === "Space") {
				if (lose) {
					setRun(true);
					setLose(false);
					changeDirection(-1);
				} else if (!run) {
					setRun(true);
				}
			}
		};

		window.addEventListener("keydown", handleKeyUp);
		return () => {
			window.removeEventListener("keydown", handleKeyUp);
		};
	}, []);

	return null;
};

export default UiControls;
