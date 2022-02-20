import styled from "@emotion/styled";

const StyledResetButton = styled.div`
	display: flex;
	position: fixed;
	right: 25px;
	bottom: 25px;
	align-items: center;
	justify-content: center;
	width: 60px;
	height: 60px;
	border: none;
	border-radius: 50%;
	background: var(--player-color);
	color: var(--primary-contrast-text);
	text-align: center;
	cursor: pointer;

	&:hover {
		background: var(--primary-light);
	}
	&:active {
		background: var(--primary-main);
	}
`;

export default StyledResetButton;
