import { MatchResultMeta } from "@/features/match";
import { MatchHistoryCard } from "./matchHistoryCard";
import { EmptyState } from "@/components/emptyState";
import styles from "./MatchHistoryList.module.css";

type MatchHistoryListProps = {
  matches: MatchResultMeta[];
  isLoading?: boolean;
  onViewDetails: (matchId: string) => void;
};

export const MatchHistoryList: React.FC<MatchHistoryListProps> = ({
  matches,
  isLoading,
  onViewDetails,
}) => {
  if (isLoading) {
    return (
      <div className={styles.list}>
        {[...Array(3)].map((_, i) => (
          <div key={i} className={styles.skeleton} />
        ))}
      </div>
    );
  }

  if (matches.length === 0) {
    return (
      <EmptyState
        title="No matches yet"
        description="Start recording your matches to see them here"
        icon="trophy"
      />
    );
  }

  return (
    <div className={styles.list}>
      {matches.map((match) => (
        <MatchHistoryCard
          key={match.id}
          match={match}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};
