import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import SvgIcon from "../../atoms/svg-icon";
import useStore from "../../ions/store";
import StyledFooter from "./styled";

const Footer = () => {
	const moves = useStore(state => state.moves);
	const direction = useStore.getState().direction;
	const {
		query: { level },
	} = useRouter();

	return (
		<StyledFooter>
			{level ? (
				<Typography
					variant="h4"
					sx={{
						position: "absolute",
						bottom: 50,
					}}
				>
					{moves}
					<SvgIcon type="arrow" deg={direction > 0 ? 0 : 90} />
				</Typography>
			) : null}
		</StyledFooter>
	);
};

export default Footer;
