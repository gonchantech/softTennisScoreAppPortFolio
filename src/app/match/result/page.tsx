import { PointHistory } from "@/features/scoring/match";
import {
  MatchStats,
  MatchResult,
  ReturnToTopButton,
} from "@/features/scoring/result";
import styles from "./page.module.css";

export default function MatchResultPage() {
  return (
    <div className={styles.container}>
      <MatchResult />
      <MatchStats />
      <PointHistory forResult={true} />
      <ReturnToTopButton />
    </div>
  );
}
