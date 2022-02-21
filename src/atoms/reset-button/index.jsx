import { useRouter } from "next/router";
import React from "react";
import SvgIcon from "../svg-icon";
import StyledResetButton from "./styled";
import useStore from "../../ions/store";

const ResetButton = () => {
	const setOverallStats = useStore(state => state.setOverallStats);
	const setGameState = useStore(state => state.setGameState);
	const resetMoves = useStore(state => state.resetMoves);
	const router = useRouter();
	return (
		<StyledResetButton
			type="button"
			onClick={() => {
				router.push("/play/0");
				setGameState("lose");
				setGameState("waiting");
				setOverallStats("restart");
				resetMoves();
			}}
		>
			<SvgIcon type="restart" />
		</StyledResetButton>
	);
};

export default ResetButton;
