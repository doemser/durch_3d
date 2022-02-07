import React from "react";
import useStore from "../../../ions/store";

const DebugPanel = () => {
	const level = useStore(state => state.level);
	const gameState = useStore(state => state.gameState);
	const build = useStore(state => state.build);
	const toggleBuild = useStore(state => state.toggleBuild);
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
			LEVEL: {level}
			<br />
			<button
				onClick={() => {
					toggleBuild();
				}}
			>
				Build: {build ? "on" : "off"}
			</button>
		</div>
	);
};

export default DebugPanel;
