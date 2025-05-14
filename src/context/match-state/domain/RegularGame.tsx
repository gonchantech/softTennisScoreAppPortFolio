import { MatchState } from "@/features/scoring/match/types/match";
import { RawPointInput } from "@/features/scoring/match/types/point";
import { Player } from "@/features/scoring/types/player";
import { addPoint } from "./utils/addPoint";

export class RegularGame {
  private static readonly pointLength = 4;

  public static addPoint(
    prevState: MatchState,
    pointData: RawPointInput,
    matchLength: number
  ): MatchState {
    return addPoint(
      this.calculateNewServerWhenGameNotFinished,
      this.pointLength,
      prevState,
      pointData,
      matchLength
    );
  }

  private static calculateNewServerWhenGameNotFinished(
    prevServesLeft: number,
    prevCurrentServerTeam: "A" | "B",
    prevCurrentServer: Player
  ): {
    newCurrentServer: Player;
    newServesLeft: number;
  } {
    if (prevServesLeft - 1 === 0) {
      const currentServerTeamPlayers =
        prevCurrentServerTeam === "A" ? ["A1", "A2"] : ["B1", "B2"];
      const currentIndex = currentServerTeamPlayers.indexOf(prevCurrentServer);
      const nextIndex = (currentIndex + 1) % 2;
      return {
        newCurrentServer: currentServerTeamPlayers[nextIndex] as Player,
        newServesLeft: 2,
      };
    }
    return {
      newCurrentServer: prevCurrentServer,
      newServesLeft: prevServesLeft - 1,
    };
  }
}
