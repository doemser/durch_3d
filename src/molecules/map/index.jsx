import React from "react";
import Box from "../../atoms/box";
import RotatingBox from "../../atoms/rotating-box";

const Map = ({ map, rotating }) => {
	return (
		<>
			{map.map(obstacle => {
				return <Box key={obstacle.id} obstacle={obstacle} />;
			})}
			{rotating?.map(obstacle => {
				return <RotatingBox key={obstacle.id} obstacle={obstacle} />;
			})}
		</>
	);
};

export default Map;
