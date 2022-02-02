import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../../../organisms/layout";
import { useRouter } from "next/router";
import { Canvas } from "@react-three/fiber";
import Level from "../../../organisms/level";
import useStore from "../../../ions/store";

const Page = () => {
	// Gets current URL-ending
	const {
		query: { level },
	} = useRouter();

	// Whenever URL-ending changes, it sets the level in useStore
	useEffect(() => {
		const goToLevel = useStore.getState().goToLevel;
		goToLevel(level);
	}, [level]);

	return (
		<Layout>
			<Head>
				<title key="title">play</title>
				<meta key="description" name="description" content="start playing" />
			</Head>

			<Canvas shadows className="canvas">
				<color attach="background" args={["black"]} />
				<Level level={level} />
			</Canvas>
		</Layout>
	);
};

export default Page;
