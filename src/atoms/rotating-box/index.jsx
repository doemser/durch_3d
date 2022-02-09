import { useBox } from "@react-three/cannon";
import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const MovingBox = ({ obstacle }) => {
	const [ref, api] = useBox(() => ({
		mass: 1,
		type: "Kinematic",
		args: obstacle.args,
		position: obstacle.position,
	}));

	const obstaclePosition = useRef(obstacle.rotation);
	useEffect(() => {
		const unsubscribe = api.rotation.subscribe(value => (obstaclePosition.current = value));
		return unsubscribe;
	}, []);

	useFrame(({ clock }) => {
		api.rotation.set(
			obstacle.axisRotate[0].rotate
				? clock.getElapsedTime() + obstacle.axisRotate[0].direction * obstacle.speed
				: obstacle.rotation[0],
			obstacle.axisRotate[1].rotate
				? clock.getElapsedTime() + obstacle.axisRotate[1].direction * obstacle.speed
				: obstacle.rotation[1],
			obstacle.axisRotate[2].rotate
				? clock.getElapsedTime() + obstacle.axisRotate[2].direction * obstacle.speed
				: obstacle.rotation[2]
		);
	});

	return (
		<mesh ref={ref} receiveShadow castShadow position={obstacle.position}>
			<boxGeometry args={obstacle.args} />
			<meshStandardMaterial
				color={obstacle.color}
				metalness={obstacle.metalness}
				roughness={obstacle.roughness}
			/>
		</mesh>
	);
};

export default MovingBox;
