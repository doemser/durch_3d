import create from "zustand";
import produce from "immer";

const useStore = create(set => {
	return {
		level: 0,
		goToLevel: level => {
			set(() => ({
				level,
			}));
		},
		moveUp: false,
		changeMove: () => {
			set(
				produce(state => {
					state.moveUp = !state.moveUp;
				})
			);
		},
	};
});

export default useStore;
