import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import useStore from "../ions/store";
import { lockScrollStyles } from "../ions/styles";
import Layout from "../organisms/layout";
import Lights from "../molecules/lights";
import MainMenu from "../organisms/main-menu";
import { useRouter } from "next/router";
import { Physics } from "@react-three/cannon";
import useTransientSession from "../ions/hooks/use-transient-session";

const Page = () => {
	useTransientSession();
	const router = useRouter();
	useEffect(() => {
		useStore.getState().getHighscores();
	}, []);

	return (
		<Layout>
			{lockScrollStyles}
			<Head>
				<title key="title">DURCH</title>
				<meta
					key="description"
					name="description"
					content="a little game about shooting through"
				/>
			</Head>

			<Canvas shadows className="canvas" camera={{ position: [0, 0, 25] }}>
				<color attach="background" args={["black"]} />
				<Lights />
				<Physics>
					<MainMenu router={router} />
				</Physics>
			</Canvas>
		</Layout>
	);
};

export default Page;
