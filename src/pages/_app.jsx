import { Global } from "@emotion/react";
import React from "react";
import { globalStyle } from "../ions/styles";
import { colorPalette } from "../ions/styles/color-palette";
import { SessionProvider } from "next-auth/react";

const normalizeStyles = <Global styles={globalStyle} />;
const paletteStyles = <Global styles={colorPalette} />;

const App = ({ Component, pageProps }) => {
	return (
		<SessionProvider session={pageProps.session}>
			{normalizeStyles}
			{paletteStyles}
			<Component {...pageProps} />
		</SessionProvider>
	);
};

export default App;
