import React from "react";

const Map = ({ map }) => {
	return (
		<>
			{map.map((map, index) => {
				return (
					<mesh key={index} receiveShadow castShadow position={map.position}>
						<boxGeometry args={map.args} />
						<meshStandardMaterial color={map.color} metalness=".3" roughness="0.5" />
					</mesh>
				);
			})}
		</>
	);
};

export default Map;
