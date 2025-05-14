// src/features/scoring/result/components/matchStats/playerStats/PlayerStats.tsx
"use client";

import React from "react";
import { PlayerStatCard } from "./PlayerStatsCard";
import styles from "./PlayerStats.module.css";
import { PointData } from "@/features/scoring/match/types/point";
import { MatchMeta } from "@/features/scoring/match-setup/types/match-setup";
import { caluculatePlayerStats } from "../../../domain/caluculatePlayerStats";
interface PlayerStatsProps {
  points: PointData[];
  matchMeta: MatchMeta;
}

export const PlayerStats: React.FC<PlayerStatsProps> = ({
  points,
  matchMeta,
}) => {
  const playerStats = caluculatePlayerStats(points, matchMeta);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>選手別獲得ポイント</h3>
      <div className={styles.cardsContainer}>
        {playerStats.map((playerStat) => (
          <PlayerStatCard key={playerStat.player} playerStat={playerStat} />
        ))}
      </div>
    </div>
  );
};
