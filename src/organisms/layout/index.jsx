import React from "react";
import Main from "../main";
import Header from "../header";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<Main>{children}</Main>
		</>
	);
};

export default Layout;
