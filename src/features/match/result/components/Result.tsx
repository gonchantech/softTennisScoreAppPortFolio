"use client";
import styles from "./Result.module.css";
import { useMatchMeta } from "@/context/match-meta";
import { useMatchState } from "@/context/match-state";
import { Match, PointHistory } from "@/features/match";
import { MatchResult } from "./matchResult";
import { MatchStats } from "./matchStats";
import { ReturnToTopButton } from "./returnToTop";

export function Result() {
  const { state: matchMeta } = useMatchMeta();
  const { state: matchState } = useMatchState();
  const { points } = matchState;

  const match: Match = {
    matchMeta,
    points,
  };

  return (
    <div className={styles.container}>
      <MatchResult match={match} />
      <MatchStats match={match} />
      <PointHistory forResult={true} />
      <ReturnToTopButton match={match} />
    </div>
  );
}
