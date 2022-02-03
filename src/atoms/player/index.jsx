import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Player = ({
	position,
	args,
	speed,
	color,
	rotateUp,
	rotateDown,
	metalness,
	roughness,
	moveUp,
}) => {
	// Moves playergroup to either top/right or bottom/right
	const playerGroup = useRef();
	useFrame(() => {
		if (moveUp) {
			playerGroup.current.position.x += speed;
			playerGroup.current.position.y -= speed;
		} else {
			playerGroup.current.position.x += speed;
			playerGroup.current.position.y += speed;
		}
	});
	// Rotates the Player Model around itself
	const player = useRef();
	useFrame(() => {
		player.current.rotation.y += 0.02;
	});

	return (
		<>
			<group ref={playerGroup} position={position} rotation={moveUp ? rotateDown : rotateUp}>
				<mesh ref={player} castShadow receiveShadow>
					<coneGeometry args={args} />
					<meshStandardMaterial
						color={color}
						metalness={metalness}
						roughness={roughness}
					/>
				</mesh>
			</group>
			);
		</>
	);
};

export default Player;
