import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import Head from "next/head";
import StyledImage from "../../atoms/image";
import ResetButton from "../../atoms/reset-button";
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
import SvgIcon from "../../atoms/svg-icon";

const white = { color: "var(--white)" };

const Page = () => {
	useTransientSession();
	const highscores = useStore(state => state.highscores);

	useEffect(() => {
		useStore.getState().getHighscores();
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
			<Typography
				variant="h6"
				component="h2"
				style={{ textAlign: "center", color: "var(--white)", marginTop: "75px" }}
			>
				LEADERBOARD
			</Typography>
			<TableContainer component={Paper}>
				<Table aria-label="durch leaderboard" sx={{ background: "var(--black)" }}>
					<TableHead>
						<TableRow>
							<TableCell sx={white} align="center">
								<SvgIcon type="trophy" />
							</TableCell>
							<TableCell align="center" sx={white} />
							<TableCell align="left" sx={white}>
								<SvgIcon type="user" />
							</TableCell>
							<TableCell align="center" sx={white}>
								<SvgIcon type="score" />
							</TableCell>
							<TableCell align="center" sx={white}>
								<SvgIcon type="moves" />
							</TableCell>
							<TableCell align="center" sx={white}>
								<SvgIcon type="deaths" />
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{highscores.map((highscore, index) => (
							<TableRow key={highscore.user}>
								<TableCell component="th" scope="row" align="center" sx={white}>
									{index + 1}.
								</TableCell>
								<TableCell align="center" sx={white}>
									<StyledImage width={35} height={35} src={highscore.image} />
								</TableCell>
								<TableCell align="left" sx={white}>
									{highscore.name}
								</TableCell>
								<TableCell align="center" sx={white}>
									{highscore.score}
								</TableCell>
								<TableCell align="center" sx={white}>
									{highscore.moves}
								</TableCell>
								<TableCell align="center" sx={white}>
									{highscore.deaths}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<ResetButton />
		</Layout>
	);
};

export default Page;
