import React from "react";
import Head from "next/head";
import Layout from "../../organisms/layout";
import Lights from "../../molecules/lights";
import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { useRouter } from "next/router";
import WinMenu from "../../organisms/win-menu";

const Page = () => {
	const router = useRouter();
	return (
		<Layout>
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
					<WinMenu router={router} />
				</Physics>
			</Canvas>
		</Layout>
	);
};

export default Page;
