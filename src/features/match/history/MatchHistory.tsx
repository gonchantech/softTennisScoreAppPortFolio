"use client";

import styles from "./MatchHistory.module.css";
import { useRouter } from "next/navigation";
import { Button } from "@/components/button/Button";
import { PlusIcon } from "@/components/icons/PlusIcon";
import { useMatches } from "../api/getMatches";
import { MatchHistoryList } from "./matchHistoryList";

export const MatchHistory: React.FC = () => {
  const { data: matches, isLoading } = useMatches();
  const router = useRouter();

  const handleViewDetails = (matchId: string) => {
    router.push(`/match/history/${matchId}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Match History</h2>
        <Button
          onClick={() => router.push("/matches/new")}
          className={styles.button}
        >
          <PlusIcon className={styles.icon} />
          New Match
        </Button>
      </div>
      <MatchHistoryList
        matches={matches}
        isLoading={isLoading}
        onViewDetails={(matchId) => handleViewDetails(matchId)}
      />
    </div>
  );
};
