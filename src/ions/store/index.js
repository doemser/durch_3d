import create from "zustand";
import produce from "immer";

const useStore = create(set => {
	return {
		run: false,
		setRun: bool => {
			set(
				produce(state => {
					state.run = bool;
					if (bool) {
						state.lose = false;
						state.win = false;
						state.direction = -1;
					}
				})
			);
		},
		win: false,
		setWin: bool => {
			set(
				produce(state => {
					state.win = bool;
					if (bool) {
						state.run = false;
						state.lose = false;
					}
				})
			);
		},
		lose: false,
		setLose: bool => {
			set(
				produce(state => {
					state.lose = bool;
					if (bool) {
						state.run = false;
						state.win = false;
					}
				})
			);
		},
		level: 0,
		goToLevel: level => {
			set(() => ({
				level,
			}));
		},
		direction: -1,
		changeDirection: direction => {
			set(state => ({
				direction: typeof direction === "undefined" ? state.direction * -1 : direction,
			}));
		},
		playerId: null,
		setPlayerId: playerId => {
			set({
				playerId,
			});
		},
	};
});

export default useStore;
