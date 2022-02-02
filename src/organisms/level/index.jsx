import React from "react";
import { OrbitControls } from "@react-three/drei";
import Player from "../../atoms/player";
import levels from "../../ions/levels";
import Lights from "../../molecules/lights";
import Map from "../../molecules/map";

const Level = ({ level }) => {
	const currentLevel = levels[Number.parseInt(level)];

	return (
		<group>
			<Lights />
			<OrbitControls />
			<Map map={currentLevel.map} />
			<Player {...currentLevel.player} />
		</group>
	);
};

export default Level;
