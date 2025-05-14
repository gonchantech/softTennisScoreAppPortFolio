import { MatchState } from "@/features/scoring/match/types/match";
import { RawPointInput } from "@/features/scoring/match/types/point";
import { checkIsDeuceWhenGameNotFinished } from "./checkIsDeuceWhenGameNotFinished";
import { checkIsAdvantageWhenGameNotFinished } from "./checkIsAdvantage";
import { createNewPointEntry } from "../createNewPointEntry";
import { Player } from "@/features/scoring/types/player";

export function handleGameInProgress(
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
  newTeamAScore: number,
  newTeamBScore: number
): MatchState {
  const { newCurrentServer, newServesLeft } =
    calculateNewServerWhenGameNotFinished(
      prevState.servesLeft,
      prevState.currentServerTeam,
      prevState.currentServer
    );

  const { newIsDeuce } = checkIsDeuceWhenGameNotFinished(
    pointLength,
    newTeamAScore,
    newTeamBScore
  );

  const { newIsAdvantage, newAdvantageTeam } =
    checkIsAdvantageWhenGameNotFinished(
      prevState.isDeuce,
      newTeamAScore,
      newTeamBScore
    );

  const newPoints = createNewPointEntry(
    prevState,
    pointData,
    prevState.teamAGames,
    prevState.teamBGames,
    newTeamAScore,
    newTeamBScore,
    prevState.currentGame
  );

  return {
    teamAScore: newTeamAScore,
    teamBScore: newTeamBScore,
    teamAGames: prevState.teamAGames,
    teamBGames: prevState.teamBGames,
    currentServerTeam: prevState.currentServerTeam,
    currentServer: newCurrentServer,
    servesLeft: newServesLeft,
    isDeuce: newIsDeuce,
    isAdvantage: newIsAdvantage,
    advantageTeam: newAdvantageTeam,
    currentGame: prevState.currentGame,
    points: newPoints,
    isMatchComplete: prevState.isMatchComplete,
    isGameComplete: false,
  };
}
