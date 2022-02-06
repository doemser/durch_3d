import { Text } from "@react-three/drei";
import React from "react";
import useStore from "../../../ions/store";

const DebugPanel = () => {
	const level = useStore(state => state.level);
	const run = useStore(state => state.run);
	const win = useStore(state => state.win);
	const lose = useStore(state => state.lose);
	const moveUp = useStore(state => state.moveUp);
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
			GAME
			<br />
			<br />
			level: {level}
			<br />
			run: {run ? "true" : "false"}
			<br />
			win: {win ? "true" : "false"}
			<br />
			lose: {lose ? "true" : "false"}
			<br />
			<br />
			PLAYER
			<br />
			<br />
			moves: {moveUp ? "up" : "down"}
		</div>
	);
};

export default DebugPanel;
