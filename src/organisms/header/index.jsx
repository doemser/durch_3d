import React from "react";
import StyledHeader from "./styled";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import styled from "@emotion/styled";

const StyledImage = styled(Image)`
	border-radius: 50%;
`;

const Header = () => {
	const { data: session } = useSession();

	if (session) {
		console.log(session);
		return (
			<StyledHeader>
				Hi {session.user.name}!{" "}
				<StyledImage width={40} height={40} src={session.user.image} />
				<button type="button" onClick={() => signOut()}>
					logout
				</button>
			</StyledHeader>
		);
	} else {
		return (
			<StyledHeader>
				<button type="button" onClick={() => signIn()}>
					sign in
				</button>
			</StyledHeader>
		);
	}
};

export default Header;
