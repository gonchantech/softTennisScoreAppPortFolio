"use client";

import React from "react";
import { ScoreTracker } from "./scoreTracker";
import { PointRecorder } from "./pointRecorder";
import { PointHistory } from "./pointHistory";
import { MatchControls } from "./matchControl";
import styles from "./Match.module.css";

export const Match: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.scoreTracker}>
        <ScoreTracker />
      </div>

      <div className={styles.mainContent}>
        <div className={styles.pointRecorder}>
          <PointRecorder />
        </div>
        <div className={styles.pointHistory}>
          <PointHistory />
        </div>
      </div>

      <div className={styles.matchControls}>
        <MatchControls />
      </div>
    </div>
  );
};

export default Match;
