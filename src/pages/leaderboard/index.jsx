import React, { useEffect } from "react";
import Head from "next/head";
import StyledImage from "../../atoms/image";
import useStore from "../../ions/store";
import Layout from "../../organisms/layout";
import useTransientSession from "../../ions/hooks/use-transient-session";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
			<TableContainer component={Paper}>
				<Table aria-label="durch leaderboard">
					<TableHead>
						<TableRow>
							<TableCell>#</TableCell>
							<TableCell align="right" />
							<TableCell align="right">Name</TableCell>
							<TableCell align="right">Score</TableCell>
							<TableCell align="right">Moves</TableCell>
							<TableCell align="right">Deaths</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{highscores.map((highscore, index) => (
							<TableRow key={highscore.user}>
								<TableCell component="th" scope="row">
									{index + 1}
								</TableCell>
								<TableCell align="left">
									<StyledImage width={35} height={35} src={highscore.image} />
								</TableCell>
								<TableCell align="right">{highscore.name}</TableCell>
								<TableCell align="right">{highscore.score}</TableCell>
								<TableCell align="right">{highscore.moves}</TableCell>
								<TableCell align="right">{highscore.deaths}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Layout>
	);
};

export default Page;
