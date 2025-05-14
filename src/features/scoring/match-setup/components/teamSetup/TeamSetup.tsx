import { useMatchMeta } from "@/context/match-meta/useMatchMeta";
import { InputField } from "@/components/form";
import styles from "./TeamSetup.module.css";

interface TeamSetupProps {
  teamAName: string;
  teamBName: string;
  playerA1Name: string;
  playerA2Name: string;
  playerB1Name: string;
  playerB2Name: string;
  onTeamANameChange: (name: string) => void;
  onTeamBNameChange: (name: string) => void;
  onPlayerA1NameChange: (name: string) => void;
  onPlayerA2NameChange: (name: string) => void;
  onPlayerB1NameChange: (name: string) => void;
  onPlayerB2NameChange: (name: string) => void;
}

export const TeamSetup: React.FC<TeamSetupProps> = ({
  teamAName,
  teamBName,
  playerA1Name,
  playerA2Name,
  playerB1Name,
  playerB2Name,
  onTeamANameChange,
  onTeamBNameChange,
  onPlayerA1NameChange,
  onPlayerA2NameChange,
  onPlayerB1NameChange,
  onPlayerB2NameChange,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.teamContainer}>
        <h3 className={styles.teamTitleA}>チームA</h3>
        <InputField
          label="チーム名"
          value={teamAName}
          onChange={(e) => onTeamANameChange(e.target.value)}
          required
        />
        <InputField
          label="選手1"
          value={playerA1Name}
          onChange={(e) => onPlayerA1NameChange(e.target.value)}
          required
        />
        <InputField
          label="選手2"
          value={playerA2Name}
          onChange={(e) => onPlayerA2NameChange(e.target.value)}
          required
        />
      </div>

      <div className={styles.teamContainer}>
        <h3 className={styles.teamTitleB}>チームB</h3>
        <InputField
          label="チーム名"
          value={teamBName}
          onChange={(e) => onTeamBNameChange(e.target.value)}
          required
        />
        <InputField
          label="選手1"
          value={playerB1Name}
          onChange={(e) => onPlayerB1NameChange(e.target.value)}
          required
        />
        <InputField
          label="選手2"
          value={playerB2Name}
          onChange={(e) => onPlayerB2NameChange(e.target.value)}
          required
        />
      </div>
    </div>
  );
};
