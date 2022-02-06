import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import useStore from "../../ions/store";
import { useSphere } from "@react-three/cannon";

const Player = ({ position, args, speed, color, metalness, roughness }) => {
	//Physics;
	const [ref, api] = useSphere(() => ({
		mass: 10,
		args: args,
		type: "Static",
		position: position,
	}));

	const playerPosition = useRef(position);
	useEffect(() => {
		const unsubscribe = api.position.subscribe(value => (playerPosition.current = value));
		return unsubscribe;
	}, []);

	useFrame(() => {
		const direction = useStore.getState().direction;
		const gameState = useStore.getState().gameState;
		if (gameState === "lose") {
			api.position.set(position[0], position[1], position[2]);
		} else if (gameState === "running") {
			api.position.set(
				playerPosition.current[0] + speed,
				playerPosition.current[1] + direction * speed,
				0
			);
		}
	});

	useEffect(() => {
		useStore.getState().setPlayerId(ref.current.uuid);
	}, [ref]);

	return (
		<mesh ref={ref} castShadow receiveShadow>
			<sphereBufferGeometry args={args} />
			<meshStandardMaterial color={color} metalness={metalness} roughness={roughness} />
		</mesh>
	);
};

export default Player;
