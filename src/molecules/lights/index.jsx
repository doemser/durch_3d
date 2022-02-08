import React from "react";

const Lights = () => {
	return (
		<>
			<ambientLight intensity={1} />
			<spotLight
				castShadow
				intensity={1}
				position={[0, 10, 25]}
				shadow-mapSize={[2048, 2048]}
			/>
		</>
	);
};

export default Lights;
