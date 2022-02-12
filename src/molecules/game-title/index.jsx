import { Text } from "@react-three/drei";
import { colors } from "../../ions/styles/color-palette";
import React from "react";

const GameTitle = ({ titlePosition, subTitlePosition, fontSize }) => {
	return (
		<group>
			<Text position={titlePosition} fontSize={fontSize} color={colors.playerColor}>
				DURCH
			</Text>
			<Text
				position={subTitlePosition}
				fontSize={fontSize * 0.28}
				color={colors.primaryContrastText}
			>
				a little game about shooting through.
			</Text>
		</group>
	);
};

export default GameTitle;
