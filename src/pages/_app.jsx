import { SessionProvider } from "next-auth/react";
import React from "react";
import { myFonts, normalizeStyles, paletteStyles } from "../ions/styles";

const App = ({ Component, pageProps }) => {
	return (
		<SessionProvider session={pageProps.session}>
			{normalizeStyles}
			{paletteStyles}
			{myFonts}
			<Component {...pageProps} />
		</SessionProvider>
	);
};

export default App;
