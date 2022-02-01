import Head from "next/head";
import React from "react";
import Button from "../atoms/button";
import Layout from "../organisms/layout";

const Page = () => {
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
			<Button>Start Game</Button>
		</Layout>
	);
};

export default Page;
