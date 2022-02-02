import create from "zustand";

const useStore = create(set => {
	return {
		level: 0,
		goToLevel: level => {
			set(() => ({
				level,
			}));
		},
	};
});

export default useStore;
