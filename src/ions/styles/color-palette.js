import { css } from "@emotion/react";

export const colors = {
	black: "#000",
	white: "#fff",
	primaryLight: "#757ce8",
	primaryMain: "#3f50b5",
	primaryDark: "#002884",
	primaryContrastText: "#fff",
	secondaryLight: "#ff7961",
	secondaryMain: "#f44336",
	secondaryDark: "#ba000d",
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
		--secondary-light: ${colors.secondaryLight};
		--secondary-main: ${colors.secondaryMain};
		--secondary-dark: ${colors.secondaryDark};
		--secondary-contrast-text: ${colors.secondaryContrastText};
	}
`;
