import React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Goal = ({ position, args, color, metalness, roughness }) => {
	//For Animation
	const goal = useRef();
	useFrame(() => {
		goal.current.rotation.x += 0.02;
	});

	return (
		<mesh ref={goal} receiveShadow castShadow position={position}>
			<boxBufferGeometry args={args} />
			<meshStandardMaterial color={color} metalness={metalness} roughness={roughness} />
		</mesh>
	);
};

export default Goal;
