import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

const StyledButton = styled.button`
	padding: ${pxToRem(8)} ${pxToRem(16)};
	border: 1px solid var(--primary-contrast-text);
	border-radius: ${pxToRem(4)};
	background: var(--primary-dark);
	color: var(--primary-contrast-text);
	transition: background 0.3s;
	font-size: 1em;

	&:hover {
		background: var(--primary-main);
		cursor: pointer;
	}

	&:active {
		background: var(--primary-light);
	}
`;

export default StyledButton;
