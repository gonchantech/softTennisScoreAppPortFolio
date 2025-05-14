"use client";

import React, { useState } from "react";
import { useMatchState } from "@/context/match-state/useMatchState";
import { Player } from "@/features/scoring/types/player";
import { Button } from "@/components/button";
import styles from "./MatchControl.module.css";
import { useMatchMeta } from "@/context/match-meta/useMatchMeta";

export const MatchControls: React.FC = () => {
  const { state: matchMeta } = useMatchMeta();
  const { state: matchState, completeMatch, resetMatchState } = useMatchState();
  const [confirmReset, setConfirmReset] = useState(false);
  const [showServerChange, setShowServerChange] = useState(false);
  const [selectedServer, setSelectedServer] = useState<Player>("A1");

  // Get player names from state
  const players = {
    A1: { id: "A1" as Player, name: matchMeta.playerA1Name, team: "A" },
    A2: { id: "A2" as Player, name: matchMeta.playerA2Name, team: "A" },
    B1: { id: "B1" as Player, name: matchMeta.playerB1Name, team: "B" },
    B2: { id: "B2" as Player, name: matchMeta.playerB2Name, team: "B" },
  };

  const handleComplete = () => {
    completeMatch();
  };

  const handleReset = () => {
    if (confirmReset) {
      resetMatchState();
      setConfirmReset(false);
    } else {
      setConfirmReset(true);
    }
  };

  const handleServerChange = () => {
    // サーバー変更のロジックを実装
    setShowServerChange(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonGroup}>
        <Button
          onClick={handleComplete}
          variant="solid"
          color="primary"
          fullWidth
        >
          試合を終了
        </Button>

        <Button
          onClick={() => setShowServerChange(true)}
          variant="solid"
          color="gray"
          fullWidth
        >
          サーバーを変更
        </Button>

        <Button
          onClick={handleReset}
          variant="solid"
          color={confirmReset ? "danger" : "gray"}
          fullWidth
        >
          {confirmReset ? "リセットを確認" : "試合をリセット"}
        </Button>
      </div>

      {/* Server Change Modal */}
      {showServerChange && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3 className={styles.modalTitle}>サーバーを変更</h3>

            <div className={styles.serverButtons}>
              {Object.values(players).map((player) => (
                <Button
                  key={player.id}
                  onClick={() => {
                    // サーバー変更のロジックを実装
                    setShowServerChange(false);
                  }}
                  variant="solid"
                  color={player.team === "A" ? "secondary" : "primary"}
                  fullWidth
                >
                  {player.name} ({player.id})
                </Button>
              ))}
            </div>

            <Button
              onClick={() => setShowServerChange(false)}
              variant="solid"
              color="gray"
              fullWidth
            >
              キャンセル
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
