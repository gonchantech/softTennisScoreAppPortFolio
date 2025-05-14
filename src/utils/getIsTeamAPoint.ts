import { PointData, RawPointInput } from "@/features/scoring/match/types/point";

export const getIsTeamAPoint = (point: PointData | RawPointInput) => {
  const lastShotTeam = point.player.startsWith("A") ? "A" : "B";
  return point.errorCause ? lastShotTeam === "B" : lastShotTeam === "A";
};
