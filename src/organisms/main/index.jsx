import React from "react";
import StyledMain from "./styled";

/**
 *
 * @param {React.ReactNode} children
 * @param {React.HTMLAttributes<HTMLButtonElement>} props
 * @return {JSX.Element}
 * @constructor
 */
const Main = ({ children, ...props }) => {
	return <StyledMain {...props}>{children}</StyledMain>;
};

export default Main;
