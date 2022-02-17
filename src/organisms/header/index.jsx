import React from "react";
import StyledHeader from "./styled";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import styled from "@emotion/styled";
import StyledButton from "../../atoms/button/styled";

const StyledImage = styled(Image)`
	border-radius: 50%;
`;

const Header = () => {
	const { data: session } = useSession();

	if (session) {
		return (
			<StyledHeader>
				<StyledButton type="button" onClick={() => signOut()}>
					logout
				</StyledButton>
				<StyledImage width={40} height={40} src={session.user.image} />
			</StyledHeader>
		);
	} else {
		return (
			<StyledHeader>
				<StyledButton type="button" onClick={() => signIn("github")}>
					sign in
				</StyledButton>
			</StyledHeader>
		);
	}
};

export default Header;
