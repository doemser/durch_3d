import React from "react";
import Head from "next/head";
import Button from "../atoms/button";
import Layout from "../organisms/layout";
import Link from "next/link";
import { StyledFlexFit } from "../organisms/flex/styled";

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

			<StyledFlexFit>
				<Link href="./play/0">
					<Button>New Game</Button>
				</Link>
			</StyledFlexFit>
		</Layout>
	);
};

export default Page;
