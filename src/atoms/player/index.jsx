import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import useStore from "../../ions/store";
import { useSphere } from "@react-three/cannon";

const Player = ({ position, args, speed, color, metalness, roughness }) => {
	const setGameState = useStore.getState().setGameState;
	//Physics;
	const [ref, api] = useSphere(() => ({
		mass: 1,
		args: args,
		type: "Static",
		position: position,
		onCollideBegin: event_ => {
			const goalId = useStore.getState().goalId;
			if (event_.body.uuid === goalId) {
				console.log("win");
				setGameState("win");
			} else {
				console.log("lose");
				setGameState("lose");
			}
		},
	}));

	const playerPosition = useRef(position);
	useEffect(() => {
		const unsubscribe = api.position.subscribe(value => (playerPosition.current = value));
		return unsubscribe;
	}, []);

	useFrame(() => {
		const direction = useStore.getState().direction;
		const gameState = useStore.getState().gameState;
		switch (gameState) {
			case "lose":
			case "waiting":
				api.position.set(...position);
				break;
			case "running":
				api.position.set(
					playerPosition.current[0] + speed,
					playerPosition.current[1] + direction * speed,
					0
				);
				break;
			default:
				break;
		}
	});

	return (
		<mesh ref={ref} castShadow receiveShadow>
			<sphereBufferGeometry args={args} />
			<meshStandardMaterial color={color} metalness={metalness} roughness={roughness} />
		</mesh>
	);
};

export default Player;
