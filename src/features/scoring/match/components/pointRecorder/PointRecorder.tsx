"use client";

import React, { useState } from "react";
import { useMatchMeta } from "@/context/match-meta/useMatchMeta";
import { useMatchState } from "@/context/match-state/useMatchState";
import { Button } from "@/components/button";
import { ToggleButton } from "@/components/toggleButton";
import { Dropdown } from "@/components/dropDown";
import styles from "./PointRecorder.module.css";
import { BallCourse, ErrorCause, RallyLength } from "../../types/point";
import { Player } from "@/features/scoring/types/player";
import { PlayType, playTypeDescriptions } from "@/features/scoring/types/play";

interface PointRecorderProps {
  setShowErrorModal: (show: boolean) => void;
}

export const PointRecorder: React.FC<PointRecorderProps> = (props) => {
  const { state: matchMeta } = useMatchMeta();
  const { state: matchState, addPoint } = useMatchState();
  const { playerA1Name, playerA2Name, playerB1Name, playerB2Name } = matchMeta;

  // Form state
  const [firstServeIn, setFirstServeIn] = useState<boolean>(true);
  const [rallyLength, setRallyLength] = useState<RallyLength>("short");
  const [player, setPlayer] = useState<Player>("A1");
  const [playType, setPlayType] = useState<PlayType>("forehandstroke");
  const [ballCourse, setBallCourse] = useState<BallCourse>("cross");
  const [isError, setIsError] = useState<boolean>(false);
  const [errorCause, setErrorCause] = useState<ErrorCause>("side_out");

  // Player names for displaying in dropdowns
  const playerNameMap = {
    A1: playerA1Name,
    A2: playerA2Name,
    B1: playerB1Name,
    B2: playerB2Name,
  };

  const errorCauseDescriptions: Record<ErrorCause, string> = {
    side_out: "サイドアウト",
    back_out: "バックアウト",
    net: "ネット",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (matchState.isMatchComplete) {
      props.setShowErrorModal(true);
      return;
    }

    const pointData = {
      firstServeIn,
      rallyLength,
      player,
      playType,
      ballCourse,
      errorCause: isError ? errorCause : undefined,
    };

    addPoint(pointData, matchMeta.matchLength, matchMeta.initialServer);
    // Reset form
    setFirstServeIn(true);
    setRallyLength("short");
    setIsError(false);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ポイント記録</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>ファーストサーブ</label>
          <ToggleButton
            value={firstServeIn}
            onChange={setFirstServeIn}
            trueLabel="イン"
            falseLabel="フォルト"
            trueVariant="success"
            falseVariant="danger"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>ラリー長</label>
          <ToggleButton
            value={rallyLength === "short"}
            onChange={(value) => setRallyLength(value ? "short" : "long")}
            trueLabel="4本以内"
            falseLabel="5本以上"
            trueVariant="primary"
            falseVariant="primary"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>最終ショット選手</label>
          <Dropdown
            value={player}
            onChange={(value) => setPlayer(value as Player)}
            options={Object.entries(playerNameMap).map(([key, name]) => ({
              value: key,
              label: name,
            }))}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>ショット種類</label>
          <Dropdown
            value={playType}
            onChange={(value) => setPlayType(value as PlayType)}
            options={Object.entries(playTypeDescriptions).map(
              ([key, description]) => ({
                value: key,
                label: `${description}`,
              })
            )}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>ボールコース</label>
          <ToggleButton
            value={ballCourse === "cross"}
            onChange={(value) => setBallCourse(value ? "cross" : "straight")}
            trueLabel="クロス"
            falseLabel="ストレート"
            trueVariant="primary"
            falseVariant="primary"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>結果</label>
          <ToggleButton
            value={!isError}
            onChange={(value) => setIsError(!value)}
            trueLabel="得点"
            falseLabel="ミス"
            trueVariant="success"
            falseVariant="danger"
          />
        </div>

        {isError && (
          <div className={styles.formGroup}>
            <label className={styles.label}>ミスの種類</label>
            <div className={styles.errorButtons}>
              {Object.entries(errorCauseDescriptions).map(
                ([key, description]) => (
                  <Button
                    key={key}
                    variant="solid"
                    color={errorCause === key ? "danger" : "gray"}
                    onClick={() => setErrorCause(key as ErrorCause)}
                    type="button"
                    fullWidth
                  >
                    {description}
                  </Button>
                )
              )}
            </div>
          </div>
        )}

        <Button type="submit" variant="solid" color="primary" fullWidth>
          ポイントを記録
        </Button>
      </form>
    </div>
  );
};
