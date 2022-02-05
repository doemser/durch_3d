import React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";
import useStore from "../../ions/store";

const Goal = ({ position, args, color, metalness, roughness }) => {
	const setWin = useStore(state => state.setWin);
	//For Animation
	const goal = useRef();
	useFrame(() => {
		goal.current.rotation.x += 0.02;
	});
	//Physics
	const [ref] = useBox(() => ({
		type: "Kinematic",
		args: args,
		position: position,
		onCollideBegin: event_ => {
			const playerId = useStore.getState().playerId;
			if (event_.body.uuid === playerId) {
				console.log("win");
				setWin(true);
			}
		},
	}));

	return (
		<group ref={ref} position={position}>
			<mesh ref={goal} receiveShadow castShadow>
				<boxBufferGeometry args={args} />
				<meshStandardMaterial color={color} metalness={metalness} roughness={roughness} />
			</mesh>
		</group>
	);
};

export default Goal;
