import { css } from "@emotion/react";

export const colors = {
	black: "#000",
	white: "#fff",
	playerColor: "#eb4d4b",
	goalColor: "#6ab04c",
	primaryLight: "#4834d4",
	primaryMain: "#30336b",
	primaryDark: "#130f40",
	primaryContrastText: "#fff",
	secondaryContrastText: "#000",
};

export const colorPalette = css`
	:root {
		--black: ${colors.black};
		--white: ${colors.white};
		--primary-light: ${colors.primaryLight};
		--primary-main: ${colors.primaryMain};
		--primary-dark: ${colors.primaryDark};
		--primary-contrast-text: ${colors.primaryContrastText};
		--secondary-contrast-text: ${colors.secondaryContrastText};
	}
`;
