import useStore from "../store";
import { useEffect } from "react";

const UiControls = ({ run }) => {
	useEffect(() => {
		const setRun = useStore.getState().setRun;

		const handleKeyUp = ({ code }) => {
			if (code === "Space") {
				setRun(true);
			}
		};

		window.addEventListener("keydown", handleKeyUp);
		return () => {
			window.removeEventListener("keydown", handleKeyUp);
		};
	}, [run]);

	return null;
};

export default UiControls;
