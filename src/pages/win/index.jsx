import React from "react";
import Head from "next/head";
import Button from "../../atoms/button";
import Layout from "../../organisms/layout";
import Link from "next/link";
import { StyledFlexFit } from "../../organisms/flex/styled";
import useStore from "../../ions/store/index";
import levels from "../../ions/levels";

const Page = () => {
	const overallStats = useStore(state => state.overallStats);
	const setOverallStats = useStore(state => state.setOverallStats);
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
				{overallStats.levels === levels.length ? (
					<>
						<h2>good job!</h2>
						<h4>
							you played {overallStats.levels} levels
							<br />
							and needed: <br />
							lives: {overallStats.lives}
							<br />
							moves: {overallStats.moves}
						</h4>
					</>
				) : (
					<>
						<h2>wait a minute..</h2>
						<h4>
							you can´t just skip levels and expect me to render a highscore for you..
						</h4>
					</>
				)}

				<Link href="./play/0">
					<Button
						onClick={() => {
							setOverallStats("restart");
						}}
					>
						do it again
					</Button>
				</Link>
			</StyledFlexFit>
		</Layout>
	);
};

export default Page;
