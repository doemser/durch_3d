import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import useStore from "../../ions/store";
import { useSphere } from "@react-three/cannon";
import { PerspectiveCamera } from "@react-three/drei";
import Texts from "../../molecules/texts";

const Player = ({ position, args, speed, color, metalness, roughness }) => {
	const setGameState = useStore.getState().setGameState;
	const build = useStore.getState().build;
	const gameState = useStore.getState().gameState;
	//Physics;
	const [ref, api] = useSphere(() => ({
		mass: 1,
		args: args,
		type: "Static",
		position: position,
		onCollideBegin: event_ => {
			const goalId = useStore.getState().goalId;
			const resetMoves = useStore.getState().resetMoves;
			if (event_.body.uuid === goalId) {
				console.log("win");
				setGameState("win");
			} else {
				console.log("lose");
				setGameState("lose");
				resetMoves();
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
		<group ref={ref}>
			{build ? null : <PerspectiveCamera makeDefault position={[0, 0, 25]} />}
			<Texts gameState={gameState} />
			<mesh castShadow receiveShadow>
				<sphereBufferGeometry args={args} />
				<meshStandardMaterial color={color} metalness={metalness} roughness={roughness} />
			</mesh>
		</group>
	);
};

export default Player;
