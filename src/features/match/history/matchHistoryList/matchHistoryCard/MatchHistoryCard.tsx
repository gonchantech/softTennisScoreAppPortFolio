import { MatchResultMeta } from "@/features/match";
import { Card } from "@/components/card";
import styles from "./MatchHistoryCard.module.css";

type MatchHistoryCardProps = {
  match: MatchResultMeta;
};

export const MatchHistoryCard: React.FC<MatchHistoryCardProps> = ({
  match,
}) => {
  return (
    <Card className={styles.card}>
      <div className={styles.header}>
        <div className={styles.info}>
          <h3 className={styles.title}>
            {match.teamAName} vs {match.teamBName}
          </h3>
          <p className={styles.date}>{match.savedAt.toLocaleString()}</p>
        </div>
        <div className={styles.score}>
          <p className={styles.scoreValue}>
            {match.teamAGames} - {match.teamBGames}
          </p>
        </div>
      </div>
    </Card>
  );
};
