import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import useStore from "../../ions/store";
import { useSphere } from "@react-three/cannon";

const Player = ({ position, args, speed, color, metalness, roughness, moveUp }) => {
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
		api.position.set(
			playerPosition.current[0] + speed,
			playerPosition.current[1] + (moveUp ? speed : -speed),
			0
		);
	});

	useEffect(() => {
		useStore.getState().setPlayerId(ref.current.uuid);
	}, [ref]);

	return (
		<>
			<mesh ref={ref} castShadow receiveShadow>
				<sphereGeometry args={args} />
				<meshStandardMaterial color={color} metalness={metalness} roughness={roughness} />
			</mesh>
			);
		</>
	);
};

export default Player;
