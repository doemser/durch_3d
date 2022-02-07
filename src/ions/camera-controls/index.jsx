import { useFrame, useThree } from "@react-three/fiber";
import CameraControls from "camera-controls";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

CameraControls.install({ THREE });
export const clock = new THREE.Clock();

const MyCameraControls = () => {
	const camera = useThree(state => state.camera);
	const { domElement } = useThree(state => state.gl);
	const controls = useMemo(() => new CameraControls(camera, domElement), [camera, domElement]);

	useEffect(() => {
		controls.mouseButtons.wheel = CameraControls.ACTION.NONE;
		controls.mouseButtons.left = CameraControls.ACTION.NONE;
		controls.mouseButtons.middle = CameraControls.ACTION.NONE;
		controls.mouseButtons.right = CameraControls.ACTION.NONE;
		controls.zoomTo(0.5);
	}, [controls]);

	useFrame(() => {
		const delta = clock.getDelta();
		const speed = 0.01;
		const step = Math.floor(clock.getElapsedTime() * speed * 20);
		controls.truck(speed, step % 2 ? speed : -speed, true);
		return controls.update(delta);
	});
	return null;
};

export default MyCameraControls;
