import React from "react";
import { OrbitControls, Text } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Player from "../../atoms/player";
import levels from "../../ions/levels";
import Lights from "../../molecules/lights";
import Map from "../../molecules/map";
import Goal from "../../atoms/goal";
import useStore from "../../ions/store";
import LevelText from "../../atoms/level-text/level-text";

const WallTexts = ({ currentLevel }) => {
	return (
		<>
			<Text
				receiveShadow
				anchorX="center"
				anchorY="middle"
				position={[-7.5, 6, -1.5]}
				fontSize={0.7}
				color="black"
			>
				{currentLevel.wallTexts[0]}
			</Text>
			<Text
				receiveShadow
				anchorX="center"
				anchorY="middle"
				position={[0, 3, -1.5]}
				fontSize={0.7}
				color="black"
			>
				{currentLevel.wallTexts[1]}
			</Text>
			<Text
				receiveShadow
				anchorX="center"
				anchorY="middle"
				position={[2, 2, -1.5]}
				fontSize={0.7}
				color="black"
			>
				{currentLevel.wallTexts[2]}
			</Text>
			<Text
				receiveShadow
				anchorX="center"
				anchorY="middle"
				position={[8, 8, -1.5]}
				fontSize={0.7}
				color="black"
			>
				{currentLevel.wallTexts[3]}
			</Text>
		</>
	);
};

const Level = ({ router }) => {
	const level = useStore(state => state.level);
	const build = useStore(state => state.build);
	const currentLevel = levels[Number.parseInt(level)];

	return (
		<group>
			<Lights />
			{build ? <OrbitControls /> : null}
			{currentLevel.wallTexts ? <WallTexts currentLevel={currentLevel} /> : null}
			<LevelText level={level} {...currentLevel.levelNumber} />
			<Physics gravity={[0, -10, 0]}>
				<Map map={currentLevel.map} />
				<Player {...currentLevel.player} router={router} />
				<Goal {...currentLevel.goal} />
			</Physics>
		</group>
	);
};

export default Level;
