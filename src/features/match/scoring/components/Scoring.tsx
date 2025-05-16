"use client";
import styles from "./Scoring.module.css";
import React from "react";
import { ScoreTracker } from "./scoreTracker";
import { PointRecorder } from "./pointRecorder";
import { PointHistory } from "./pointHistory";
import { MatchControls } from "./matchControl";
import { Stack } from "@/components/stack";

type ScoringProps = {
  setShowCompleteModal: (show: boolean) => void;
  setShowErrorModal: (show: boolean) => void;
};

export const Scoring: React.FC<ScoringProps> = ({
  setShowCompleteModal,
  setShowErrorModal,
}) => {
  return (
    <div className={styles.container}>
      <ScoreTracker />
      <Stack direction="horizontal" gap="md">
        <PointRecorder
          setShowErrorModal={setShowErrorModal}
          setShowCompleteModal={setShowCompleteModal}
        />
        <PointHistory forResult={false} />
      </Stack>

      <MatchControls setShowCompleteModal={setShowCompleteModal} />
    </div>
  );
};
