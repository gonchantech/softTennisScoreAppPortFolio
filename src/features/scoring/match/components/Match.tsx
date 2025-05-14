"use client";

import React, { useEffect, useState } from "react";
import { useMatchState } from "@/context/match-state/useMatchState";
import { ScoreTracker } from "./scoreTracker";
import { PointRecorder } from "./pointRecorder";
import { PointHistory } from "./pointHistory";
import { MatchControls } from "./matchControl";
import { ConfirmModal } from "@/components/modal/ConfirmModal";
import styles from "./Match.module.css";
import { useRouter } from "next/navigation";

export const Match: React.FC = () => {
  const router = useRouter();
  const { state } = useMatchState();
  const { isMatchComplete } = state;
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  // isMatchCompleteの変更を監視
  useEffect(() => {
    if (isMatchComplete) {
      setShowCompleteModal(true);
    }
  }, [isMatchComplete]);

  const handleConfirmError = () => {
    setShowErrorModal(false);
  };

  const handleConfirmComplete = () => {
    router.push("/match/result");
    setShowCompleteModal(false);
  };

  const handleCancelComplete = () => {
    setShowCompleteModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.scoreTracker}>
        <ScoreTracker />
      </div>

      <div className={styles.mainContent}>
        <div className={styles.pointRecorder}>
          <PointRecorder setShowErrorModal={setShowErrorModal} />
        </div>
        <div className={styles.pointHistory}>
          <PointHistory forResult={false} />
        </div>
      </div>

      <div className={styles.matchControls}>
        <MatchControls setShowCompleteModal={setShowCompleteModal} />
      </div>

      <ConfirmModal
        isOpen={showCompleteModal}
        message="試合を終了しますか？"
        onConfirm={handleConfirmComplete}
        onCancel={handleCancelComplete}
      />

      <ConfirmModal
        isOpen={showErrorModal}
        message="試合が終了しているので、新しいポイントを記録できません"
        onConfirm={handleConfirmError}
      />
    </div>
  );
};

export default Match;
