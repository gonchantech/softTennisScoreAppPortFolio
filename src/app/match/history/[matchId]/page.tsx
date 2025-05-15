"use client";

import { useParams, useRouter } from "next/navigation";
import { testData } from "@/testing/testData";
import { MatchResult, MatchStats } from "@/features/match/result/components";
import { Match, PointData } from "@/features/match";
import styles from "./page.module.css";
import { Button } from "@/components/button/Button";

const MatchHistoryPage = () => {
  const { matchId } = useParams();
  const router = useRouter();
  const matchResultMeta = testData.matchMeta.find(
    (match) => match.id === matchId
  );
  const points: PointData[] = testData.point
    .filter((point) => point.matchId === matchId)
    .map(({ id, matchId, ...point }) => point);

  if (!matchResultMeta) {
    return <div>Match not found</div>;
  }

  const match: Match = {
    matchMeta: matchResultMeta,
    points,
  };

  const handleClick = () => {
    router.push("/match/history");
  };

  return (
    <div>
      <MatchResult match={match} />
      <MatchStats match={match} />
      <div className={styles.container}>
        <Button color="gray" size="md" onClick={handleClick} fullWidth>
          一覧へ戻る
        </Button>
      </div>
    </div>
  );
};

export default MatchHistoryPage;
