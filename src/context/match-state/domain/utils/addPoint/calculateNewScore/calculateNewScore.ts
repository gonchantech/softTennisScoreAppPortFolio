import { RawPointInput } from "@/features/scoring/match/types/point";
import { getIsTeamAPoint } from "@/utils/getIsTeamAPoint";

export function calculateNewScore(
  prevTeamAScore: number,
  prevTeamBScore: number,
  pointData: RawPointInput
): {
  newTeamAScore: number;
  newTeamBScore: number;
} {
  const isTeamAPoint = getIsTeamAPoint(pointData);
  if (isTeamAPoint) {
    return {
      newTeamAScore: prevTeamAScore + 1,
      newTeamBScore: prevTeamBScore,
    };
  } else {
    return {
      newTeamAScore: prevTeamAScore,
      newTeamBScore: prevTeamBScore + 1,
    };
  }
}
