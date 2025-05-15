import { ServeStat, PointData, MatchMeta } from "@/features/match";

export function calculateServeStats(
  points: PointData[],
  matchMeta: MatchMeta
): ServeStat[] {
  const serveStats: ServeStat[] = [
    {
      player: "A1",
      name: matchMeta.playerA1Name,
      firstServeAttempts: 0,
      firstServeIn: 0,
      successRate: 0,
    },
    {
      player: "A2",
      name: matchMeta.playerA2Name,
      firstServeAttempts: 0,
      firstServeIn: 0,
      successRate: 0,
    },
    {
      player: "B1",
      name: matchMeta.playerB1Name,
      firstServeAttempts: 0,
      firstServeIn: 0,
      successRate: 0,
    },
    {
      player: "B2",
      name: matchMeta.playerB2Name,
      firstServeAttempts: 0,
      firstServeIn: 0,
      successRate: 0,
    },
  ];
  points.forEach((point) => {
    const serverStat = serveStats.find((s) => s.player === point.server);

    if (serverStat) {
      serverStat.firstServeAttempts += 1;
      if (point.firstServeIn) {
        serverStat.firstServeIn += 1;
      }
    }
  });

  serveStats.forEach((stat) => {
    if (stat.firstServeAttempts > 0) {
      stat.successRate = Math.round(
        (stat.firstServeIn / stat.firstServeAttempts) * 100
      );
    }
  });

  return serveStats;
}
