import { Typography } from "@mui/material";
import React, { useState } from "react";
import StyledImage from "../../atoms/image";
import RankInfo from "../../molecules/rank-info";
import StyledHeader from "./styled";
import { useSession, signIn, signOut } from "next-auth/react";
import StyledLoginButton from "../../atoms/login-button/styled";
import styled from "@emotion/styled";

const StyledNextImageWrapper = styled.div`
	position: absolute;
	right: 0;
	margin: 10px;
`;

const Header = () => {
	const { data: session } = useSession();
	const [menu, setMenu] = useState(false);

	return (
		<StyledHeader>
			{session ? (
				<>
					<RankInfo session={session} />
					<Typography variant="h5" sx={{ color: "var(--player-color)" }}>
						DURCH
					</Typography>
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
				<>
					<Typography variant="h5" sx={{ color: "var(--player-color)" }}>
						DURCH
					</Typography>
					<StyledLoginButton menu type="login" onClick={() => signIn()}>
						sign in
					</StyledLoginButton>
				</>
			)}
		</StyledHeader>
	);
};

export default Header;
