"use client";
import styles from "./PointHistory.module.css";
import React, { useMemo } from "react";
import { useMatchMeta } from "@/context/match-meta/useMatchMeta";
import { useMatchState } from "@/context/match-state/useMatchState";
import { getIsTeamAPoint } from "@/utils/getIsTeamAPoint";
import { Button } from "@/components/button";
import { PointInfo } from "./pointInfo";

interface PointHistoryProps {
  forResult: boolean;
}

export const PointHistory: React.FC<PointHistoryProps> = (props) => {
  const { forResult } = props;
  const { state: matchMeta } = useMatchMeta();
  const { state: matchState, removeLatestPoint } = useMatchState();
  const { playerA1Name, playerA2Name, playerB1Name, playerB2Name } = matchMeta;
  const { points } = matchState;

  const reversedPoints = useMemo(() => [...points].reverse(), [points]);

  if (points.length === 0) {
    return (
      <div className={styles.emptyMessageContainer}>
        <div className={styles.emptyMessage}>ポイントが記録されていません</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>ポイント履歴</span>
        {!forResult && (
          <Button
            onClick={removeLatestPoint}
            variant="solid"
            color="danger"
            size="sm"
          >
            最新を削除
          </Button>
        )}
      </div>

      <div className={styles.pointList}>
        {reversedPoints.map((point) => (
          <PointInfo
            key={point.timestamp}
            point={point}
            playerA1Name={playerA1Name}
            playerA2Name={playerA2Name}
            playerB1Name={playerB1Name}
            playerB2Name={playerB2Name}
            isTeamAPoint={getIsTeamAPoint(point)}
          />
        ))}
      </div>
    </div>
  );
};
