import { css } from "@emotion/react";

export const colors = {
	black: "#000",
	white: "#fff",
	primaryLight: "#b2bec3",
	primaryMain: "#636e72",
	primaryDark: "#2d3436",
	primaryContrastText: "#fff",
	secondaryContrastText: "#000",
};

export const colorPalette = css`
	:root {
		--header-height: 30px;
		--footer-height: 30px;
		--black: ${colors.black};
		--white: ${colors.white};
		--primary-light: ${colors.primaryLight};
		--primary-main: ${colors.primaryMain};
		--primary-dark: ${colors.primaryDark};
		--primary-contrast-text: ${colors.primaryContrastText};
		--secondary-contrast-text: ${colors.secondaryContrastText};
	}
`;
