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
		min-height: 100vh;
		margin: 0;
		display: flex;
		color: white;
		font-size: 1rem;
		flex-direction: column;
		background: var(--primary-dark);
	}

	#__next {
		display: contents;
	}
`;
