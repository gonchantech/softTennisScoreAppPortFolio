import { MatchState, RawPointInput } from "@/features/match";

export function createNewPointEntry(
  prevState: MatchState,
  pointData: RawPointInput,
  teamAGames: number,
  teamBGames: number,
  teamAScore: number,
  teamBScore: number,
  gameNumber: number
) {
  return [
    ...prevState.points,
    {
      ...pointData,
      timestamp: Date.now(),
      teamAGames,
      teamBGames,
      teamAScore,
      teamBScore,
      gameNumber,
    },
  ];
}
