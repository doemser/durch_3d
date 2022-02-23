import { useSphere } from "@react-three/cannon";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import useStore from "../../ions/store";
import OverlayTexts from "../../molecules/overlay-texts";

const Player = ({ position, args, speed, color, metalness, roughness, router }) => {
	const setGameState = useStore.getState().setGameState;
	const build = useStore.getState().build;
	const gameState = useStore.getState().gameState;
	//Texture Loader
	const playerNormalMap = useLoader(TextureLoader, "/sofa.jpeg");
	//Physics;
	const [ref, api] = useSphere(() => ({
		mass: 1,
		args: args,
		type: "Static",
		position: position,
		onCollideBegin: event_ => {
			const goalId = useStore.getState().goalId;
			const setOverallStats = useStore.getState().setOverallStats;
			const resetMoves = useStore.getState().resetMoves;
			if (event_.body.uuid === goalId) {
				console.log("win");
				setGameState("win");
			} else {
				console.log("lose");
				setGameState("lose");
				setOverallStats("lose");
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

	const playerMesh = useRef();
	useFrame(() => {
		const direction = useStore.getState().direction;
		if (direction > 0 && gameState === "running") {
			playerMesh.current.rotation.x += speed / 2;
			playerMesh.current.rotation.y += speed / 2;
			playerMesh.current.rotation.z += speed / 2;
		} else if (direction < 0 && gameState === "running") {
			playerMesh.current.rotation.x -= speed / 2;
			playerMesh.current.rotation.y -= speed / 2;
			playerMesh.current.rotation.z -= speed / 2;
		}
	});

	return (
		<group ref={ref}>
			{build ? null : <PerspectiveCamera makeDefault position={[0, 0, 25]} />}
			<OverlayTexts gameState={gameState} router={router} />
			<mesh ref={playerMesh} castShadow receiveShadow>
				<sphereBufferGeometry args={args} />
				<meshStandardMaterial
					color={color}
					metalness={metalness}
					roughness={roughness}
					normalMap={playerNormalMap}
				/>
			</mesh>
		</group>
	);
};

export default Player;
