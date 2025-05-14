import { MatchState } from "@/features/scoring/match/types/match";
import { RawPointInput } from "@/features/scoring/match/types/point";

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
