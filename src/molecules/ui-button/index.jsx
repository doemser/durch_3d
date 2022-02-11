import { colors } from "../../ions/styles/color-palette";
import React, { useEffect, useState } from "react";
import UiButtonText from "../../atoms/ui-button-text";

const UiButton = ({ children, position, rotation, args, router, type, url }) => {
	const [hovered, setHover] = useState(false);
	useEffect(() => {
		document.body.style.cursor = hovered ? "pointer" : "auto";
	}, [hovered]);
	return (
		<group position={position} rotation={rotation}>
			<mesh
				receiveShadow
				castShadow
				onPointerOver={() => {
					setHover(!hovered);
				}}
				onPointerOut={() => {
					setHover(!hovered);
				}}
				onClick={() => {
					if (type === "intern") {
						router.push(url);
					} else if (type === "extern") {
						window.open(url, `_blank`);
					}

					setHover(false);
				}}
			>
				<boxGeometry args={args} />
				<meshStandardMaterial
					color={hovered ? colors.primaryLight : colors.primaryDark}
					metalness="0.2"
					roughness="0"
				/>
			</mesh>
			<UiButtonText position={position} args={args}>
				{children}
			</UiButtonText>
		</group>
	);
};

export default UiButton;
