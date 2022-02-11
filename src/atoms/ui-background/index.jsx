import { colors } from "../../ions/styles/color-palette";
import React from "react";
import { useFrame } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";
import GameTitle from "../../molecules/game-title";

const UiBackground = ({ children }) => {
	const [ref, api] = useBox(() => ({
		mass: 10,
		position: [0, 0, -3],
		args: [30, 1, 30],
		type: "Static",
	}));
	useFrame(({ mouse }) => {
		api.rotation.set(mouse.y * -0.2, mouse.x * 0.2, 0);
	});
	return (
		<mesh ref={ref} receiveShadow position={[0, 0, -3]}>
			<boxGeometry args={[20, 20, 0.5]} />
			<meshStandardMaterial color={colors.primaryMain} metalness=".3" roughness="0" />
			<GameTitle />
			{children}
		</mesh>
	);
};

export default UiBackground;
