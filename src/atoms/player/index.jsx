import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Player = ({ position, rotation, args, color, metalness, roughness }) => {
	// Rotates the Player Model around itself
	const player = useRef();
	useFrame(() => {
		player.current.rotation.y += 0.02;
	});

	return (
		<>
			<group position={position} rotation={rotation}>
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
