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
		api.rotation.set(clock.getElapsedTime() * 4, 0, 0);
	});

	return (
		<mesh ref={ref} receiveShadow castShadow position={position}>
			<boxBufferGeometry args={args} />
			<meshStandardMaterial color={color} metalness={metalness} roughness={roughness} />
		</mesh>
	);
};

export default Goal;
