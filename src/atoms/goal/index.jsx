import React, { useEffect } from "react";

import { useFrame } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";
import useStore from "../../ions/store";

const Goal = ({ position, args, color, metalness, roughness }) => {
	//Physics
	const [ref, api] = useBox(() => ({
		type: "Kinematic",
		args: args,
		position: position,
		rotation: [0, 0, 0],
	}));

	useEffect(() => {
		useStore.getState().setGoalId(ref.current.uuid);
	}, [ref]);

	useFrame(({ clock }) => {
		const gameState = useStore.getState().gameState;
		api.rotation.set(clock.getElapsedTime() * 4, 0, 0);
		if (gameState === "waiting") {
			api.position.set(position[0], position[1], position[2]);
		}
	});

	return (
		<mesh ref={ref} receiveShadow castShadow position={position}>
			<boxBufferGeometry args={args} />
			<meshStandardMaterial color={color} metalness={metalness} roughness={roughness} />
		</mesh>
	);
};

export default Goal;
