import React from "react";
import StyledImage from "../../atoms/image";

import StyledHeader from "./styled";
import { useSession, signIn, signOut } from "next-auth/react";
import StyledButton from "../../atoms/button/styled";

const Header = () => {
	const { data: session } = useSession();

	return (
		<StyledHeader>
			{session ? (
				<>
					<StyledButton type="button" onClick={() => signOut()}>
						logout
					</StyledButton>
					<StyledImage width={40} height={40} src={session.user.image} />
				</>
			) : (
				<StyledButton type="button" onClick={() => signIn()}>
					sign in
				</StyledButton>
			)}
		</StyledHeader>
	);
};

export default Header;
