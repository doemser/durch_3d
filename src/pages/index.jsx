import React from "react";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import Layout from "../organisms/layout";
import Lights from "../molecules/lights";
import MainMenu from "../organisms/main-menu";
import { useRouter } from "next/router";

const Page = () => {
	const router = useRouter();
	return (
		<Layout>
			<Head>
				<title key="title">shoot.through</title>
				<meta
					key="description"
					name="description"
					content="A little game about shooting through"
				/>
			</Head>

			<Canvas shadows className="canvas" camera={{ position: [0, 0, 25] }}>
				<color attach="background" args={["black"]} />
				<Lights />
				<MainMenu router={router} />
			</Canvas>
		</Layout>
	);
};

export default Page;
