import useStore from "../store";
import { useEffect } from "react";

const UiControls = () => {
	useEffect(() => {
		const run = useStore.getState().run;
		const win = useStore.getState().win;
		const lose = useStore.getState().lose;
		const setRun = useStore.getState().setRun;

		const handleKeyUp = ({ code }) => {
			if (code === "Space") {
				if (lose || (!run && !win)) {
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
