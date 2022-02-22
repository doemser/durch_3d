import React, { useState } from "react";
import StyledImage from "../../atoms/image";
import RankInfo from "../../molecules/rank-info";
import StyledHeader from "./styled";
import { useSession, signIn, signOut } from "next-auth/react";
import StyledButton from "../../atoms/button/styled";

const Header = () => {
	const { data: session } = useSession();
	const [menu, setMenu] = useState(false);

	return (
		<StyledHeader>
			{session ? (
				<>
					{menu ? (
						<StyledButton type="button" onClick={() => signOut()}>
							logout
						</StyledButton>
					) : null}

					<StyledImage
						cursor="pointer"
						width={40}
						height={40}
						src={session.user.image}
						onClick={() => {
							setMenu(!menu);
						}}
					/>
					<RankInfo session={session} />
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
