import React from "react";

const Map = ({ map }) => {
	return (
		<>
			{map.map(map => {
				return (
					<mesh key={map.id} receiveShadow castShadow position={map.position}>
						<boxGeometry args={map.args} />
						<meshStandardMaterial
							color={map.color}
							metalness={map.metalness}
							roughness={map.roughness}
						/>
					</mesh>
				);
			})}
		</>
	);
};

export default Map;
