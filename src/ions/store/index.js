import create from "zustand";
import produce from "immer";
import { persist } from "zustand/middleware";

const useStore = create(
	persist(
		set => {
			return {
				something: [],
				addSomething: (test, test1, test2) => {
					set(
						produce(state => {
							state.something.push({ test, test1, test2 });
						})
					);
				},
			};
		},
		{ name: "zustand" }
	)
);

export default useStore;
