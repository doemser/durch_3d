import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import Head from "next/head";
import useStore from "../../ions/store";
import Layout from "../../organisms/layout";
import { useRouter } from "next/router";
import useTransientSession from "../../ions/hooks/use-transient-session";

const Page = () => {
	const { data: session } = useSession();
	//useTransientSession();
	//const session = useStore(state => state.session);
	const overallStats = useStore(state => state.overallStats);
	const highscores = useStore(state => state.highscores);
	const postHighscore = useStore(state => state.postHighscore);

	useEffect(() => {
		const getHighscores = useStore.getState().getHighscores;
		getHighscores();
	}, []);

	//const router = useRouter();
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
			<button
				type="button"
				onClick={() => {
					//postHighscore(session.user, overallStats);
					console.log(highscores);
				}}
			>
				debug
			</button>
			<ol>
				{highscores.map(highscore => {
					return (
						<li key={highscore._id}>
							name: {highscore.name} - score: {highscore.score} - moves:{" "}
							{highscore.moves} - deaths: {highscore.deaths}
						</li>
					);
				})}
			</ol>
		</Layout>
	);
};

export default Page;
