import { useBox } from "@react-three/cannon";
import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const RotatingBox = ({
	obstacle: { args, position, rotation, axis, speed, metalness, color, roughness },
}) => {
	const [ref, api] = useBox(() => ({
		mass: 1,
		type: "Kinematic",
		args: args,
		position: position,
	}));

	const obstaclePosition = useRef(rotation);
	useEffect(() => {
		const unsubscribe = api.rotation.subscribe(value => (obstaclePosition.current = value));
		return unsubscribe;
	}, []);

	useFrame(({ clock }) => {
		const [x, y, z] = axis;
		const time = clock.getElapsedTime();
		api.rotation.set(
			x ? time * x.direction * x.speed : rotation[0],
			y ? time * y.direction * y.speed : rotation[1],
			z ? time * z.direction * z.speed : rotation[2]
		);
	});

	return (
		<mesh ref={ref} receiveShadow castShadow position={position}>
			<boxGeometry args={args} />
			<meshStandardMaterial color={color} metalness={metalness} roughness={roughness} />
		</mesh>
	);
};

export default RotatingBox;
