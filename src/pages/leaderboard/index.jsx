import React, { useEffect } from "react";
import Head from "next/head";
import StyledImage from "../../atoms/image";
import useStore from "../../ions/store";
import Layout from "../../organisms/layout";
import useTransientSession from "../../ions/hooks/use-transient-session";

const Page = () => {
	useTransientSession();
	const highscores = useStore(state => state.highscores);

	useEffect(() => {
		const getHighscores = useStore.getState().getHighscores;
		getHighscores();
	}, []);

	return (
		<Layout>
			<Head>
				<title key="title">DURCH - Leaderboard</title>
				<meta
					key="description"
					name="description"
					content="a little game about shooting through"
				/>
			</Head>
			<h1>Leaderboard</h1>
			<ul>
				{highscores.map(highscore => {
					return (
						<li key={highscore._id}>
							<StyledImage width={35} height={35} src={highscore.image} />
							{highscore.name} - score: {highscore.score} - moves: {highscore.moves} -
							deaths: {highscore.deaths}
						</li>
					);
				})}
			</ul>
		</Layout>
	);
};

export default Page;
