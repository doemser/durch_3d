import { Typography } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import StyledImage from "../../atoms/image";
import StyledLoginButton from "../../atoms/login-button/styled";
import SvgIcon from "../../atoms/svg-icon";
import levels from "../../ions/levels";
import useStore from "../../ions/store";
import StyledNextImageWrapper from "../../molecules/next-image-wrapper/styled";
import RankInfo from "../../molecules/rank-info";
import StyledHeader from "./styled";

const Header = () => {
	const { data: session } = useSession();
	const [menu, setMenu] = useState(false);
	const overallStats = useStore(state => state.overallStats);
	const {
		query: { level },
	} = useRouter();

	return (
		<StyledHeader>
			<>
				<RankInfo />
				<Typography
					variant="h5"
					sx={{ color: "var(--player-color)", position: "absolute" }}
				>
					DURCH
				</Typography>
				{level ? (
					<>
						<Typography
							variant="h6"
							sx={{ fontSize: "15px", position: "absolute", top: "35px" }}
						>
							{overallStats.levels}/{levels.length - 1}
						</Typography>

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
				{session ? (
					<>
						<RankInfo session={session} />
						<StyledLoginButton type="logout" menu={menu} onClick={() => signOut()}>
							logout
						</StyledLoginButton>
						<StyledNextImageWrapper>
							<StyledImage
								cursor="pointer"
								width={30}
								height={30}
								src={session.user.image}
								onClick={() => {
									setMenu(!menu);
								}}
							/>
						</StyledNextImageWrapper>
					</>
				) : (
					<StyledLoginButton type="login" menu="true" onClick={() => signIn()}>
						login
					</StyledLoginButton>
				)}
			</>
		</StyledHeader>
	);
};

export default Header;
