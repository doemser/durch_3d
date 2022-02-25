import { Typography } from "@mui/material";
import React from "react";

import SvgIcon from "../../atoms/svg-icon";
import styled from "@emotion/styled";
import useStore from "../../ions/store";

const StyledControlPanel = styled.div`
	position: absolute;
	transition: left 0.5s, bottom 0.5s;
	text-align: center;
	${({ position }) => {
		return `
		bottom: ${position[1]}px;
		left: ${position[0]}px;
		`;
	}}
`;

const ControlsPanel = () => {
	const gameState = useStore(state => state.gameState);
	return (
		<StyledControlPanel position={[25, 25]}>
			{gameState === "win" ? (
				<Typography variant="p">
					{"  "}press{"  "}
					<SvgIcon type="enter" size="35" />
					{"  "}for next Level{"  "}
				</Typography>
			) : (
				<Typography variant="p">
					{"  "}use{"  "}
					<SvgIcon type="tap" size="35" />
					{"  "}or{"  "}
					<SvgIcon type="space" size="35" />
				</Typography>
			)}
		</StyledControlPanel>
	);
};

export default ControlsPanel;
