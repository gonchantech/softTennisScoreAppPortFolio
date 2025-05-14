// advantageのときはdeuceもtrueになる。
export function checkIsDeuceWhenGameNotFinished(
  pointLength: 4 | 7,
  newTeamAScore: number,
  newTeamBScore: number
): { newIsDeuce: boolean } {
  if (newTeamAScore >= pointLength - 1 && newTeamBScore >= pointLength - 1) {
    return { newIsDeuce: true };
  }
  return { newIsDeuce: false };
}
