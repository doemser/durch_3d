import React from "react";
import useStore from "../../ions/store";

const CurrentRank = ({ session }) => {
	const highscores = useStore(state => state.highscores);
	const check = highscores.findIndex(e => e.user === session.user.id);

	return <span>{check > -1 ? `#${check + 1}` : ""}</span>;
};

export default CurrentRank;
