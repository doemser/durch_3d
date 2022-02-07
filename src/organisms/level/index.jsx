import React, { useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Player from "../../atoms/player";
import levels from "../../ions/levels";
import Lights from "../../molecules/lights";
import Map from "../../molecules/map";
import Goal from "../../atoms/goal";
import useStore from "../../ions/store";
import Texts from "../../molecules/texts";
import MyCameraControls from "../../ions/camera-controls";

const Level = () => {
	const level = useStore(state => state.level);
	const gameState = useStore(state => state.gameState);
	const build = useStore(state => state.build);
	const currentLevel = levels[Number.parseInt(level)];

	return (
		<group>
			<Lights />
			{build ? <OrbitControls /> : <MyCameraControls />}

			<Texts gameState={gameState} />
			<Physics gravity={[0, -10, 0]}>
				<Map map={currentLevel.map} />
				<Player {...currentLevel.player} />
				<Goal {...currentLevel.goal} />
			</Physics>
		</group>
	);
};

export default Level;
