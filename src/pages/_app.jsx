import { Global } from "@emotion/react";
import React from "react";
import { globalStyle } from "../ions/styles";
import { colorPalette } from "../ions/styles/color-palette";

const normalizeStyles = <Global styles={globalStyle} />;
const paletteStyles = <Global styles={colorPalette} />;

const App = ({ Component, pageProps }) => {
	return (
		<>
			{normalizeStyles}
			{paletteStyles}
			<Component {...pageProps} />
		</>
	);
};

export default App;
