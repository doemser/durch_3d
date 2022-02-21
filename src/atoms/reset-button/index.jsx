import { useRouter } from "next/router";
import React from "react";
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
			<svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
				<path
					fill="currentColor"
					d="M12,4C14.1,4 16.1,4.8 17.6,6.3C20.7,9.4 20.7,14.5 17.6,17.6C15.8,19.5 13.3,20.2 10.9,19.9L11.4,17.9C13.1,18.1 14.9,17.5 16.2,16.2C18.5,13.9 18.5,10.1 16.2,7.7C15.1,6.6 13.5,6 12,6V10.6L7,5.6L12,0.6V4M6.3,17.6C3.7,15 3.3,11 5.1,7.9L6.6,9.4C5.5,11.6 5.9,14.4 7.8,16.2C8.3,16.7 8.9,17.1 9.6,17.4L9,19.4C8,19 7.1,18.4 6.3,17.6Z"
				/>
			</svg>
		</StyledResetButton>
	);
};

export default ResetButton;
