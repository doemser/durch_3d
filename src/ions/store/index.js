import create from "zustand";
import produce from "immer";

const useStore = create(set => {
	return {
		run: false,
		setRun: bool => {
			set(
				produce(state => {
					state.run = bool;
				})
			);
		},
		win: false,
		setWin: bool => {
			set(
				produce(state => {
					state.win = bool;
				})
			);
		},
		lose: false,
		setLose: bool => {
			set(
				produce(state => {
					state.lose = bool;
				})
			);
		},
		level: 0,
		goToLevel: level => {
			set(() => ({
				level,
			}));
		},
		moveUp: false,
		changeMove: bool => {
			set(
				produce(state => {
					state.moveUp = bool;
				})
			);
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
