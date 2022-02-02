import { css } from "@emotion/react";

export const globalStyle = css`
	:root {
		--header-height: 30px;
		--footer-height: 30px;
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
	}

	body {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		margin: 0;
		background: var(--black);
		color: white;
		font-size: 1rem;
	}

	#__next {
		display: contents;
	}
`;
