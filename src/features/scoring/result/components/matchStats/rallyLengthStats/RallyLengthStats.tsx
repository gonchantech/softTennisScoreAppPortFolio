"use client";

import React from "react";
import styles from "./RallyLengthStats.module.css";
import { PointData } from "@/features/scoring/match/types/point";
import { caluculateRallyLengthStats } from "@/features/scoring/result/domain/caluculateRallyLengthStats";
import { RallyLengthStatItem } from "./RallyLengthStatsItem";

interface RallyLengthStatsProps {
  points: PointData[];
}

export const RallyLengthStats: React.FC<RallyLengthStatsProps> = ({
  points,
}) => {
  const stats = caluculateRallyLengthStats(points);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>ラリー長の統計</h3>
      <div className={styles.statsContainer}>
        <RallyLengthStatItem
          title="4本以内のラリー"
          percentage={stats.shortRallyPercentage}
          count={stats.shortRallyCount}
          isShortRally
        />
        <RallyLengthStatItem
          title="5本以上のラリー"
          percentage={stats.longRallyPercentage}
          count={stats.longRallyCount}
        />
      </div>
    </div>
  );
};
