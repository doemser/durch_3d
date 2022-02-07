import React from "react";
import { useBox } from "@react-three/cannon";

const Box = ({ obstacle }) => {
	const [ref] = useBox(() => ({
		mass: 1,
		type: "Kinematic",
		args: obstacle.args,
		position: obstacle.position,
	}));

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

const Map = ({ map }) => {
	return (
		<>
			{map.map(obstacle => {
				return <Box key={obstacle.id} obstacle={obstacle} />;
			})}
		</>
	);
};

export default Map;
