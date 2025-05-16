"use client";

import { useParams, useRouter } from "next/navigation";
import {
  MatchResultComponent,
  MatchStatsComponent,
} from "@/features/match/result/components";
import { Match, PointHistory } from "@/features/match";
import { Button } from "@/components/button/Button";
import { useMatch } from "@/features/match/api/getMatch";
import { Stack } from "@/components/stack";

const MatchHistoryPage = () => {
  const { matchId } = useParams();
  const router = useRouter();
  const { data } = useMatch({ matchId: matchId as string });

  if (!data) {
    return <div>Match not found</div>;
  }

  const { matchResultMeta, points } = data;

  const match: Match = {
    matchMeta: matchResultMeta,
    points,
  };

  const handleClick = () => {
    router.push("/match/history");
  };

  return (
    <Stack direction="vertical" gap="md">
      <MatchResultComponent match={match} />
      <MatchStatsComponent match={match} />
      <PointHistory forResult={true} />
      <Button color="gray" size="md" onClick={handleClick} fullWidth>
        一覧へ戻る
      </Button>
    </Stack>
  );
};

export default MatchHistoryPage;
