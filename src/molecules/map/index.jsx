import React from "react";
import { useBox } from "@react-three/cannon";
import useStore from "../../ions/store";

const Box = ({ obstacle }) => {
	const setGameState = useStore(state => state.setGameState);

	const [ref] = useBox(() => ({
		type: "Kinematic",
		args: obstacle.args,
		position: obstacle.position,
		onCollideBegin: event_ => {
			const playerId = useStore.getState().playerId;
			if (event_.body.uuid === playerId) {
				console.log("game over");
				setGameState("lose");
			}
		},
	}));
	return (
		<mesh ref={ref} receiveShadow castShadow position={obstacle.position}>
			<boxGeometry args={obstacle.args} />
			<meshStandardMaterial
				color={obstacle.color}
				metalness={obstacle.metalness}
				roughness={obstacle.roughness}
			/>
		</mesh>
	);
};

const Map = ({ map }) => {
	return (
		<>
			{map.map(obstacle => {
				return <Box key={obstacle.id} obstacle={obstacle} />;
			})}
		</>
	);
};

export default Map;
