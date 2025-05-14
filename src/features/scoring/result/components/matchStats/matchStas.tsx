"use client";

import { RallyLengthStats } from "./rallyLengthStats";
import { ServeStats } from "./serveStats";
import { PlayerStats } from "./playerStats/PlayerStats";
import { useMatchState } from "@/context/match-state/useMatchState";
import { useMatchMeta } from "@/context/match-meta/useMatchMeta";
import styles from "./MatchStats.module.css";

export const MatchStats = () => {
  const { state: matchMeta } = useMatchMeta();
  const { state: matchState } = useMatchState();
  const { points } = matchState;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>試合統計</h2>
      <RallyLengthStats points={points} />
      <ServeStats points={points} matchMeta={matchMeta} />
      <PlayerStats points={points} matchMeta={matchMeta} />
    </div>
  );
};
