import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Player from "../../atoms/player";
import levels from "../../ions/levels";
import Lights from "../../molecules/lights";
import Map from "../../molecules/map";
import Goal from "../../atoms/goal";
import PlayerControls from "../../ions/player-controls";
import useStore from "../../ions/store";
import UiControls from "../../ions/ui-controls";
import Texts from "../../molecules/texts";

const Level = ({ level }) => {
	const currentLevel = levels[Number.parseInt(level)];
	const moveUp = useStore(state => state.moveUp);
	const run = useStore(state => state.run);
	const win = useStore(state => state.win);
	const lose = useStore(state => state.lose);

	return (
		<group>
			<Lights />
			<OrbitControls />
			<Texts run={run} win={win} lose={lose} />
			<Physics>
				<Map map={currentLevel.map} />
				{run ? (
					<PlayerControls run={run} moveUp={moveUp} />
				) : (
					<UiControls run={run} win={win} lose={lose} />
				)}
				<Player moveUp={moveUp} run={run} win={win} lose={lose} {...currentLevel.player} />
				<Goal {...currentLevel.goal} />
			</Physics>
		</group>
	);
};

export default Level;
