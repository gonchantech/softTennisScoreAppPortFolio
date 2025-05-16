"use client";
import styles from "./Result.module.css";
import { useMatchMeta } from "@/context/match-meta";
import { useMatchState } from "@/context/match-state";
import { Match, PointHistory } from "@/features/match";
import { MatchResultComponent } from "./matchResult/MatchResult";
import { MatchStatsComponent } from "./matchStats/MatchStats";
import { ReturnToTopButton } from "./returnToTop";
import { useEffect } from "react";
import { useSaveMatch } from "../../api/saveMatch";

export function Result() {
  const { state: matchMeta } = useMatchMeta();
  const { state: matchState } = useMatchState();
  const { points } = matchState;
  const saveMatch = useSaveMatch();

  useEffect(() => {
    saveMatch.submit({ match });
  }, []);

  const match: Match = {
    matchMeta,
    points,
  };

  return (
    <div className={styles.container}>
      <MatchResultComponent match={match} />
      <MatchStatsComponent match={match} />
      <PointHistory forResult={true} />
      <ReturnToTopButton />
    </div>
  );
}
