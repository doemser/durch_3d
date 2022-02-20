import axios from "axios";
import create from "zustand";
import produce from "immer";

const useStore = create(set => {
	return {
		session: null,
		setSession: session => {
			set({ session });
		},
		gameState: "waiting",
		setGameState: gameState => {
			set(
				produce(state => {
					state.gameState = gameState;
					if (gameState === "running") {
						state.direction = -1;
					}
				})
			);
		},
		level: 0,
		setLevel: query => {
			set(() => ({
				level: query,
			}));
		},
		direction: -1,
		changeDirection: direction => {
			set(state => ({
				direction: typeof direction === "undefined" ? state.direction * -1 : direction,
				moves: state.moves + 1,
			}));
		},
		moves: 0,
		resetMoves: () => {
			set(() => ({
				moves: 0,
			}));
		},
		overallStats: { levels: 0, deaths: 0, moves: 0, score: 0 },
		setOverallStats: gameState => {
			set(
				produce(state => {
					state.overallStats.moves = state.overallStats.moves + state.moves;
					if (gameState === "win") {
						state.overallStats.levels = state.overallStats.levels + 1;
					} else if (gameState === "lose") {
						state.overallStats.deaths = state.overallStats.deaths + 1;
					} else if (gameState === "restart") {
						state.overallStats = { levels: 0, deaths: 0, moves: 0, score: 0 };
					}
					state.overallStats.score = Math.floor(
						1000_000 /
							state.overallStats.moves /
							(state.overallStats.deaths === 0 ? 1 : state.overallStats.deaths * 2)
					);
				})
			);
		},
		goalId: null,
		setGoalId: goalId => {
			set({
				goalId,
			});
		},
		build: false,
		toggleBuild: () => {
			set(
				produce(state => {
					state.build = !state.build;
				})
			);
		},
		highscores: [],
		getHighscores: async () => {
			console.log("fetching highscore data");
			const response = await axios.get("/api/highscores");
			const result = response.data.sort(function (a, b) {
				return b.score - a.score;
			});

			set(() => ({ highscores: result }));
		},
		postHighscore: async (session, stats) => {
			console.log("posting highscore data");
			await axios.post("/api/highscores", {
				name: session.name,
				user: session.id,
				image: session.image,
				score: stats.score,
				moves: stats.moves,
				deaths: stats.deaths,
			});
		},
		putHighscore: async (session, stats) => {
			console.log("updating highscore data");
			await axios.put("/api/highscores", {
				name: session.name,
				user: session.id,
				image: session.image,
				score: stats.score,
				moves: stats.moves,
				deaths: stats.deaths,
			});
		},
	};
});

export default useStore;
