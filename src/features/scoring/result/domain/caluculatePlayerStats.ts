import { MatchMeta } from "../../match-setup/types/match-setup";
import { PointData } from "../../match/types/point";
import { PlayType } from "../../types/play";
import { PlayerStat } from "../types/stats";

export function caluculatePlayerStats(
  points: PointData[],
  macthMeta: MatchMeta
): PlayerStat[] {
  const playerStats: PlayerStat[] = [
    {
      player: "A1",
      name: macthMeta.playerA1Name,
      pointsWon: 0,
      errors: 0,
      playTypeBreakdown: initPlayTypeBreakdown(),
      errorBreakdown: initPlayTypeBreakdown(),
    },
    {
      player: "A2",
      name: macthMeta.playerA2Name,
      pointsWon: 0,
      errors: 0,
      playTypeBreakdown: initPlayTypeBreakdown(),
      errorBreakdown: initPlayTypeBreakdown(),
    },
    {
      player: "B1",
      name: macthMeta.playerB1Name,
      pointsWon: 0,
      errors: 0,
      playTypeBreakdown: initPlayTypeBreakdown(),
      errorBreakdown: initPlayTypeBreakdown(),
    },
    {
      player: "B2",
      name: macthMeta.playerB2Name,
      pointsWon: 0,
      errors: 0,
      playTypeBreakdown: initPlayTypeBreakdown(),
      errorBreakdown: initPlayTypeBreakdown(),
    },
  ];

  points.forEach((point) => {
    const playerStat = playerStats.find((p) => p.player === point.player);
    if (!playerStat) return;

    if (point.errorCause) {
      playerStat.errors += 1;
      playerStat.errorBreakdown[point.playType] += 1;
    } else {
      playerStat.pointsWon += 1;
      playerStat.playTypeBreakdown[point.playType] += 1;
    }
  });

  return playerStats;
}

function initPlayTypeBreakdown(): Record<PlayType, number> {
  return {
    forehandstroke: 0,
    backhandstroke: 0,
    forehandreception: 0,
    backhandreception: 0,
    serve: 0,
    forehandlowvolley: 0,
    backhandlowvolley: 0,
    forehandvolley: 0,
    backhandvolley: 0,
    forehandhighvolley: 0,
    backhandhighvolley: 0,
    smash: 0,
  };
}
