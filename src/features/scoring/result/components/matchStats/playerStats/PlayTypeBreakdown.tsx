"use client";

import React from "react";
import { PlayType, playTypeDescriptions } from "@/features/scoring/types/play";
import styles from "./PlayTypeBreakdown.module.css";

interface PlayTypeBreakdownProps {
  breakdown: Record<PlayType, number>;
  type: "success" | "error";
}

export const PlayTypeBreakdown: React.FC<PlayTypeBreakdownProps> = ({
  breakdown,
  type,
}) => {
  return (
    <div className={styles.breakdown}>
      {Object.entries(breakdown)
        .filter(([_, count]) => count > 0)
        .map(([playType, count]) => (
          <div key={playType} className={styles.breakdownItem}>
            <span>{playTypeDescriptions[playType as PlayType]}</span>
            <span className={styles.count}>{count}回</span>
          </div>
        ))}
    </div>
  );
};
