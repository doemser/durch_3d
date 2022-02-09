import { useBox } from "@react-three/cannon";
import React from "react";

const Box = ({ obstacle }) => {
	const [ref] = useBox(() => ({
		mass: 1,
		type: "Kinematic",
		args: obstacle.args,
		position: obstacle.position,
		rotation: obstacle.rotation,
	}));

	return (
		<mesh
			ref={ref}
			receiveShadow
			castShadow
			position={obstacle.position}
			rotation={obstacle.rotation}
		>
			<boxGeometry args={obstacle.args} />
			<meshStandardMaterial
				color={obstacle.color}
				metalness={obstacle.metalness}
				roughness={obstacle.roughness}
			/>
		</mesh>
	);
};

export default Box;
