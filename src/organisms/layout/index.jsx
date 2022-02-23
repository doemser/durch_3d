import React from "react";
import Footer from "../footer";
import Main from "../main";
import Header from "../header";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

export default Layout;
