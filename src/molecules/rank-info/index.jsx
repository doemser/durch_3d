import { useRouter } from "next/router";
import React from "react";
import CurrentRank from "../../atoms/current-rank";
import SvgIcon from "../../atoms/svg-icon";
import StyledRankInfo from "./styled";

const RankInfo = ({ session = false }) => {
	const router = useRouter();

	return (
		<StyledRankInfo
			onClick={() => {
				router.push("/leaderboard");
			}}
		>
			<span>
				<SvgIcon type="trophy" color="var(--accent-color-two)" />
			</span>
			{session ? <CurrentRank session={session} /> : null}
		</StyledRankInfo>
	);
};

export default RankInfo;
