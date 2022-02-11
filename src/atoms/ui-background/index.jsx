import { colors } from "../../ions/styles/color-palette";
import React from "react";

const UiBackground = () => {
	return (
		<mesh receiveShadow position={[0, 0, -1.5]}>
			<boxGeometry args={[20, 20, 0.5]} />
			<meshStandardMaterial color={colors.primaryMain} metalness=".3" roughness="0" />
		</mesh>
	);
};

export default UiBackground;
