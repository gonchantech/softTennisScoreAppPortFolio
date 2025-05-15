import { MatchState, RawPointInput, Player } from "@/features/match";
import { calculateNewScore } from "./calculateNewScore";
import { checkIsGameComplete } from "./checkIsGameComplete";
import { checkIsMatchComplete } from "./checkIsMatchComplete";
import { handleGameComplete } from "./handleGame/handleGameComplete";
import { handleGameInProgress } from "./handleGame/handleGameInProgress";

export function addPoint(
  calculateNewServerWhenGameNotFinished: (
    prevServesLeft: number,
    prevCurrentServerTeam: "A" | "B",
    prevCurrentServer: Player
  ) => {
    newCurrentServer: Player;
    newServesLeft: number;
  },
  pointLength: 4 | 7,
  prevState: MatchState,
  pointData: RawPointInput,
  matchLength: number
): MatchState {
  const { newTeamAScore, newTeamBScore } = calculateNewScore(
    prevState.teamAScore,
    prevState.teamBScore,
    pointData
  );

  const { newTeamAGames, newTeamBGames, newIsGameComplete } =
    checkIsGameComplete(
      pointLength,
      prevState.isDeuce,
      prevState.isAdvantage,
      prevState.teamAGames,
      prevState.teamBGames,
      newTeamAScore,
      newTeamBScore
    );

  const { newIsMatchComplete } = checkIsMatchComplete(
    newIsGameComplete,
    newTeamAGames,
    newTeamBGames,
    matchLength
  );

  if (newIsGameComplete) {
    return handleGameComplete(
      prevState,
      pointData,
      newTeamAGames,
      newTeamBGames,
      newIsMatchComplete
    );
  } else {
    return handleGameInProgress(
      calculateNewServerWhenGameNotFinished,
      pointLength,
      prevState,
      pointData,
      newTeamAScore,
      newTeamBScore
    );
  }
}
