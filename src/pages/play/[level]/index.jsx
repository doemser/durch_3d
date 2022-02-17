import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useTransientSession from "../../../ions/hooks/use-transient-session";
import { levelCount } from "../../../ions/levels";
import PlayerControls from "../../../ions/player-controls";
import useStore from "../../../ions/store";
import UiControls from "../../../ions/ui-controls";
import Layout from "../../../organisms/layout";
import Level from "../../../organisms/level";
//import DebugPanel from "../../../molecules/debug/texts";

const Page = () => {
	useTransientSession();
	const gameState = useStore(state => state.gameState);
	const {
		query: { level },
	} = useRouter();

	const parsedLevel = Number.parseInt(level);
	useEffect(() => {
		const setLevel = useStore.getState().setLevel;
		setLevel(parsedLevel);
	}, [parsedLevel]);

	return (
		<Layout>
			<Head>
				<title key="title">DURCH - Level {level}</title>
				<meta key="description" name="description" content="start playing" />
			</Head>
			{/*<DebugPanel />*/}
			{gameState === "running" ? <PlayerControls /> : <UiControls />}
			<Canvas shadows className="canvas" camera={{ position: [0, 0, 25] }}>
				<color attach="background" args={["black"]} />
				<Level />
			</Canvas>
		</Layout>
	);
};

export default Page;

// Fallback for false queries
export const getServerSideProps = async request => {
	const {
		query: { level },
	} = request;
	const parsedLevel = Number.parseInt(level);

	if (levelCount < parsedLevel + 1) {
		return {
			redirect: {
				permanent: false,
				destination: "/win",
			},
		};
	}

	return { props: {} };
};
