import styled from "@emotion/styled";

const StyledButton = styled.button`
	padding: 10px;
	padding-top: 5px;
	padding-bottom: 5px;
	transition: background 0.5s;
	border: none;
	background: var(--primary-light);
	color: var(--primary-contrast-text);
	cursor: pointer;
	user-select: none;

	&:hover {
		background: var(--primary-main);
	}
	&:active {
		background: var(--player-color);
	}
`;

export default StyledButton;
