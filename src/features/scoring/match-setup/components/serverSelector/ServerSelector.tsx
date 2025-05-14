import { Button } from "@/components/button";
import styles from "./ServerSelector.module.css";
import { Player } from "@/features/scoring/types/player";

interface ServerSelectorProps {
  initialServer: Player;
  onInitialServerChange: (player: Player) => void;
  playerA1Name: string;
  playerA2Name: string;
  playerB1Name: string;
  playerB2Name: string;
}

export const ServerSelector: React.FC<ServerSelectorProps> = ({
  initialServer,
  onInitialServerChange,
  playerA1Name,
  playerA2Name,
  playerB1Name,
  playerB2Name,
}) => {
  return (
    <div>
      <label className={styles.label}>最初のサーバー</label>
      <div className={styles.buttonGrid}>
        <Button
          variant="solid"
          color={initialServer === "A1" ? "secondary" : "gray"}
          onClick={() => onInitialServerChange("A1")}
          type="button"
        >
          {playerA1Name}
        </Button>
        <Button
          variant="solid"
          color={initialServer === "A2" ? "secondary" : "gray"}
          onClick={() => onInitialServerChange("A2")}
          type="button"
        >
          {playerA2Name}
        </Button>
        <Button
          variant="solid"
          color={initialServer === "B1" ? "primary" : "gray"}
          onClick={() => onInitialServerChange("B1")}
          type="button"
        >
          {playerB1Name}
        </Button>
        <Button
          variant="solid"
          color={initialServer === "B2" ? "primary" : "gray"}
          onClick={() => onInitialServerChange("B2")}
          type="button"
        >
          {playerB2Name}
        </Button>
      </div>
    </div>
  );
};
