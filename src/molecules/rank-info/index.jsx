import React from "react";
import SvgIcon from "../../atoms/svg-icon";
import useStore from "../../ions/store";
import StyledRankInfo from "./styled";

const RankInfo = ({ session }) => {
	const highscores = useStore(state => state.highscores);
	const check = highscores.findIndex(e => e.user === session.user.id);

	return (
		<StyledRankInfo>
			<span>
				<SvgIcon type="trophy" />
				{check > -1 ? `#${check + 1}` : "#-"}
			</span>
		</StyledRankInfo>
	);
};

export default RankInfo;
