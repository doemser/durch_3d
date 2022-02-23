import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import StyledImage from "../../atoms/image";
import SvgIcon from "../../atoms/svg-icon";
import levels from "../../ions/levels";
import useStore from "../../ions/store";
import StyledNextImageWrapper from "../../molecules/next-image-wrapper/styled";
import RankInfo from "../../molecules/rank-info";
import StyledHeader from "./styled";
import { useSession, signIn, signOut } from "next-auth/react";
import StyledLoginButton from "../../atoms/login-button/styled";

const Footer = () => {
	const { data: session } = useSession();
	const [menu, setMenu] = useState(false);
	const overallStats = useStore(state => state.overallStats);
	const {
		query: { level },
	} = useRouter();
	//const
	return (
		<StyledHeader>
			{session ? (
				<>
					{level ? (
						<>
							<Typography
								variant="h6"
								sx={{
									fontSize: "15px",
									position: "absolute",
									top: "60px",
									right: "10px",
								}}
							>
								{overallStats.moves}
								<SvgIcon type="moves" />
							</Typography>
							<Typography
								variant="h6"
								sx={{
									fontSize: "15px",
									position: "absolute",
									top: "90px",
									right: "10px",
								}}
							>
								{overallStats.deaths}
								<SvgIcon type="deaths" />
							</Typography>
						</>
					) : null}
				</>
			) : null}
		</StyledHeader>
	);
};

export default Footer;
