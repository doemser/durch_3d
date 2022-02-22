import styled from "@emotion/styled";
import Image from "next/image";

const StyledImage = styled(Image)`
	border-radius: 50%;
	${({ cursor = "default" }) => {
		return `
		 cursor: ${cursor};
		`;
	}}
`;

export default StyledImage;
