import React from "react";
import Head from "next/head";
import Button from "../../atoms/button";
import Layout from "../../organisms/layout";
import Link from "next/link";
import { StyledFlexFit } from "../../organisms/flex/styled";
import useStore from "../../ions/store/index";

const Page = () => {
	const overallStats = useStore(state => state.overallStats);
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
				<h2>good job!</h2>
				<h4>
					you needed: <br />
					lives: {overallStats.lives}
					<br />
					moves: {overallStats.moves}
				</h4>
				<Link href="./play/0">
					<Button>do it again</Button>
				</Link>
			</StyledFlexFit>
		</Layout>
	);
};

export default Page;
