import { Global } from "@emotion/react";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ResetButton from "../../../atoms/reset-button";
import useTransientSession from "../../../ions/hooks/use-transient-session";
import { levelCount } from "../../../ions/levels";
import MobileControls from "../../../ions/mobile-controls";
import PlayerControls from "../../../ions/player-controls";
import useStore from "../../../ions/store";
import { lockScrollStyles } from "../../../ions/styles";
import UiControls from "../../../ions/ui-controls";
import Layout from "../../../organisms/layout";
import Level from "../../../organisms/level";
//import DebugPanel from "../../../molecules/debug/texts";

const Page = () => {
	useTransientSession();
	const gameState = useStore(state => state.gameState);
	const router = useRouter();
	const {
		query: { level },
	} = useRouter();

	const parsedLevel = Number.parseInt(level);
	useEffect(() => {
		const setLevel = useStore.getState().setLevel;
		setLevel(parsedLevel);
	}, [parsedLevel]);

	useEffect(() => {
		const getHighscores = useStore.getState().getHighscores;
		getHighscores();
	}, []);

	return (
		<Layout>
			{lockScrollStyles}
			<Head>
				<title key="title">DURCH - Level {level}</title>
				<meta key="description" name="description" content="start playing" />
			</Head>
			{/*<DebugPanel />*/}
			{gameState === "running" ? <PlayerControls /> : <UiControls />}
			<MobileControls />
			<Canvas shadows className="canvas" camera={{ position: [0, 0, 25] }}>
				<color attach="background" args={["black"]} />
				<Level router={router} />
			</Canvas>
			<ResetButton />
		</Layout>
	);
};

export default Page;

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
