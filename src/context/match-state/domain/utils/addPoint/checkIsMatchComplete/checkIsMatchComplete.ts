export function checkIsMatchComplete(
  newIsGameComplete: boolean,
  newTeamAGames: number,
  newTeamBGames: number,
  matchLength: number
): { newIsMatchComplete: boolean } {
  if (!newIsGameComplete) {
    return { newIsMatchComplete: false };
  }

  if (newTeamAGames > matchLength / 2 || newTeamBGames > matchLength / 2) {
    return { newIsMatchComplete: true };
  }
  return { newIsMatchComplete: false };
}
