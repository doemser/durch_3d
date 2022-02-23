import styled from "@emotion/styled";

const StyledLoginButton = styled.button`
	position: absolute;
	padding: 5px 10px 5px 10px;
	transition: background 0.5s, right 0.2s ease-in-out;
	border: none;
	background: var(--primary-light);
	box-shadow: 0 0 20px 0 black;
	color: var(--primary-contrast-text);
	cursor: pointer;
	user-select: none;

	&:hover,
	&:active {
		background: var(--primary-main);
	}
	&:active {
		background: var(--player-color);
		color: var(--secondary-contrast-text);
	}

	${({ type, menu }) => {
		return ` ${
			type === "logout"
				? `right: ${menu ? "40px" : "-100px"};
		transform: ${menu ? "rotate(-15deg);" : "rotate(0deg)"};`
				: `right: 10px; transform: rotate(0deg);`
		}
		`;
	}}
`;

export default StyledLoginButton;
