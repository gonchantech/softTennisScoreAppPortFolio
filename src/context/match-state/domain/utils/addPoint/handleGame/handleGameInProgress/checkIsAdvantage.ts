export function checkIsAdvantageWhenGameNotFinished(
  isPrevDeuce: boolean,
  newTeamAScore: number,
  newTeamBScore: number
): {
  newIsAdvantage: boolean;
  newAdvantageTeam: "A" | "B" | undefined;
} {
  if (isPrevDeuce) {
    if (newTeamAScore > newTeamBScore) {
      return { newIsAdvantage: true, newAdvantageTeam: "A" };
    } else if (newTeamBScore > newTeamAScore) {
      return { newIsAdvantage: true, newAdvantageTeam: "B" };
    }
  }
  return { newIsAdvantage: false, newAdvantageTeam: undefined };
}
