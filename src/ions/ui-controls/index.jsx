import useStore from "../store";
import { useEffect } from "react";

const UiControls = () => {
	useEffect(() => {
		const run = useStore.getState().run;
		const win = useStore.getState().win;
		const lose = useStore.getState().lose;
		const setRun = useStore.getState().setRun;

		const handleKeyDown = ({ code }) => {
			if (code === "Space") {
				if (lose || (!run && !win)) {
					setRun(true);
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
