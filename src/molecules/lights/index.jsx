import React from "react";

const Lights = () => {
	return (
		<>
			<ambientLight intensity={1} />
			<spotLight
				castShadow
				intensity={1}
				position={[0, 20, 25]}
				shadow-mapSize={[5000, 5000]}
			/>
		</>
	);
};

export default Lights;
