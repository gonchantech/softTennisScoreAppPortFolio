"use client";
import styles from "./ReturnToTopButton.module.css";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/button";
import { Match } from "@/features/match";
import { useSaveMatch } from "@/features/match/api/saveMatch";

type ReturnToTopButtonProps = {
  match: Match;
};

export const ReturnToTopButton: React.FC<ReturnToTopButtonProps> = ({
  match,
}) => {
  const saveMatch = useSaveMatch();
  const router = useRouter();

  const handleClick = () => {
    saveMatch.submit({ match });
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <Button color="gray" size="md" onClick={handleClick} fullWidth>
        トップ画面へ戻る
      </Button>
    </div>
  );
};
