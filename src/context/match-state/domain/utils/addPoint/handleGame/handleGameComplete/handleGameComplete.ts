import { MatchState } from "@/features/scoring/match/types/match";
import { RawPointInput } from "@/features/scoring/match/types/point";
import { changeStateAfterGameComplete } from "./changeStateAfterGameComplete";
import { createNewPointEntry } from "../createNewPointEntry";

export function handleGameComplete(
  prevState: MatchState,
  pointData: RawPointInput,
  newTeamAGames: number,
  newTeamBGames: number,
  newIsMatchComplete: boolean
): MatchState {
  const {
    newCurrentGame,
    newTeamAScore,
    newTeamBScore,
    newIsDeuce,
    newIsAdvantage,
    newAdvantageTeam,
    newCurrentServerTeam,
    newCurrentServer,
    newServesLeft,
  } = changeStateAfterGameComplete(
    prevState.currentGame,
    prevState.currentServerTeam
  );

  const newPoints = createNewPointEntry(
    prevState,
    pointData,
    newTeamAGames,
    newTeamBGames,
    newTeamAScore,
    newTeamBScore,
    newCurrentGame
  );

  return {
    teamAScore: newTeamAScore,
    teamBScore: newTeamBScore,
    teamAGames: newTeamAGames,
    teamBGames: newTeamBGames,
    currentServerTeam: newCurrentServerTeam,
    currentServer: newCurrentServer,
    servesLeft: newServesLeft,
    isDeuce: newIsDeuce,
    isAdvantage: newIsAdvantage,
    advantageTeam: newAdvantageTeam,
    currentGame: newCurrentGame,
    points: newPoints,
    isMatchComplete: newIsMatchComplete,
    isGameComplete: true,
  };
}
