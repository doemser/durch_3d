import React from "react";
import Box from "../../atoms/box";

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
