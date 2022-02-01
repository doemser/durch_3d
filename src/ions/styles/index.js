import { css } from "@emotion/react";

export const globalStyle = css`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
	}

	body {
		margin: 0;
		min-height: 100vh;
		font-size: 1rem;
		color: white;
		display: flex;
		flex-direction: column;
		background: var(--primary-dark);
	}

	#__next {
		display: contents;
	}
`;
