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
			}));
		},
		goalId: null,
		setGoalId: goalId => {
			set({
				goalId,
			});
		},
	};
});

export default useStore;
