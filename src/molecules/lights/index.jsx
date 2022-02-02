import React from "react";

const Lights = () => {
	return (
		<>
			<ambientLight intensity={1} />
			<spotLight castShadow intensity={1} position={[0, 10, 25]} />
		</>
	);
};

export default Lights;
