import create from "zustand";
import produce from "immer";

const useStore = create(set => {
	return {
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
		overallStats: { levels: 0, deaths: 0, moves: 0 },
		setOverallStats: gameState => {
			set(
				produce(state => {
					state.overallStats.moves = state.overallStats.moves + state.moves;
					if (gameState === "win") {
						state.overallStats.levels = state.overallStats.levels + 1;
					} else if (gameState === "lose") {
						state.overallStats.deaths = state.overallStats.deaths + 1;
					} else if (gameState === "restart") {
						state.overallStats = { levels: 0, deaths: 0, moves: 0 };
					}
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
	};
});

export default useStore;
