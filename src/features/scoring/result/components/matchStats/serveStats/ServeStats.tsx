"use client";

import React from "react";
import { ServeStatsTable } from "./ServeStatsTable";
import styles from "./ServeStats.module.css";
import { PointData } from "@/features/scoring/match/types/point";
import { MatchMeta } from "@/features/scoring/match-setup/types/match-setup";
import { caluculateServeStats } from "../../../domain/calculateServeStats";

interface ServeStatsProps {
  points: PointData[];
  matchMeta: MatchMeta;
}

export const ServeStats: React.FC<ServeStatsProps> = ({
  points,
  matchMeta,
}) => {
  const serveStats = caluculateServeStats(points, matchMeta);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>サーブ統計</h3>
      <ServeStatsTable serveStats={serveStats} />
    </div>
  );
};
