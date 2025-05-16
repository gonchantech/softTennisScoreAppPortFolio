"use client";

import { useParams, useRouter } from "next/navigation";
import {
  MatchResultComponent,
  MatchStatsComponent,
} from "@/features/match/result/components";
import { Match } from "@/features/match";
import styles from "./page.module.css";
import { Button } from "@/components/button/Button";
import { useMatch } from "@/features/match/api/getMatch";

const MatchHistoryPage = () => {
  const { matchId } = useParams();
  const router = useRouter();
  const { data } = useMatch({ matchId: matchId as string });

  console.log("dataだよーーーー", data);

  if (!data) {
    return <div>Match not found</div>;
  }

  const { matchResultMeta, points } = data;
  console.log("matchResultMeta", matchResultMeta);
  console.log("points", points);

  const match: Match = {
    matchMeta: matchResultMeta,
    points,
  };

  const handleClick = () => {
    router.push("/match/history");
  };

  return (
    <div>
      <MatchResultComponent match={match} />
      <MatchStatsComponent match={match} />
      <div className={styles.container}>
        <Button color="gray" size="md" onClick={handleClick} fullWidth>
          一覧へ戻る
        </Button>
      </div>
    </div>
  );
};

export default MatchHistoryPage;
