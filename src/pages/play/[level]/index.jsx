import Head from "next/head";
import React from "react";
import Layout from "../../../organisms/layout";
import { useRouter } from "next/router";

const Page = () => {
	const { query } = useRouter();

	return (
		<Layout>
			<Head>
				<title key="title">play</title>
				<meta key="description" name="description" content="start playing" />
			</Head>
			<h1>This is Level {query.level}</h1>
		</Layout>
	);
};

export default Page;
