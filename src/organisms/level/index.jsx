import React, { useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import Player from "../../atoms/player";
import levels from "../../ions/levels";
import Lights from "../../molecules/lights";
import Map from "../../molecules/map";
import Goal from "../../atoms/goal";
import PlayerControls from "../../ions/player-controls";
import useStore from "../../ions/store";

const Level = ({ level }) => {
	const currentLevel = levels[Number.parseInt(level)];
	const moveUp = useStore(state => state.moveUp);

	return (
		<group>
			<Lights />
			<OrbitControls />
			<PlayerControls moveUp={moveUp} />
			<Map map={currentLevel.map} />
			<Player {...currentLevel.player} />
			<Goal {...currentLevel.goal} />
		</group>
	);
};

export default Level;
