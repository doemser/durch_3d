import React from "react";
import useStore from "../../../ions/store";

const DebugPanel = () => {
	const level = useStore(state => state.level);
	const direction = useStore(state => state.direction);
	const gameState = useStore(state => state.gameState);
	return (
		<div
			style={{
				position: "fixed",
				zIndex: "5",
				top: "10px",
				right: "10px",
				width: "100px",
				fontSize: "12px",
				padding: "10px",
				color: "white",
				background: "black",
			}}
		>
			GAMESTATE
			<br />
			{gameState}
			<br />
			<br />
			PLAYER
			<br />
			level: {level}
			<br />
			moves: {direction > 0 ? "up" : "down"}
		</div>
	);
};

export default DebugPanel;
