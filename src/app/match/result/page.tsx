"use client";

import { Stack } from "@/components/stack";
import styles from "./page.module.css";
import { useMatchMeta } from "@/context/match-meta/useMatchMeta";
import { useMatchState } from "@/context/match-state/useMatchState";
import { useSaveMatch } from "@/features/match/api/saveMatch";
import { MatchResultComponent } from "@/features/match/result/components/matchResult";
import { MatchStatsComponent } from "@/features/match/result/components/matchStats";
import { PointHistory } from "@/features/match/scoring/components/pointHistory/PointHistory";
import { Match } from "@/features/match/types";
import { useEffect } from "react";
import { Button } from "@/components/button/Button";
import { useRouter } from "next/navigation";

export default function MatchResultPage() {
  const router = useRouter();
  const { state: matchMeta } = useMatchMeta();
  const { state: matchState } = useMatchState();
  const { points } = matchState;
  const saveMatch = useSaveMatch();

  useEffect(() => {
    saveMatch.submit({ match });
  }, []);

  const handleClick = () => {
    router.push("/");
  };

  const match: Match = {
    matchMeta,
    points,
  };

  return (
    <Stack direction="vertical" gap="md">
      <MatchResultComponent match={match} />
      <MatchStatsComponent match={match} />
      <PointHistory forResult={true} />
      <Button color="gray" size="md" onClick={handleClick} fullWidth>
        トップ画面へ戻る
      </Button>
    </Stack>
  );
}
