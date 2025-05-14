"use client";

import { MatchState } from "@/features/scoring/match/types/match";
import { RawPointInput } from "@/features/scoring/match/types/point";
import { MatchStateAction } from "./types/MatchStateAction";
import { createContext } from "react";
import { defaultMatchState } from "./constants/defaultMatchState";
import { MatchLength } from "@/features/scoring/match-setup/types/match-setup";
import { Player } from "@/features/scoring/types/player";

export const MatchStateContext = createContext<{
  state: MatchState;
  dispatch: React.Dispatch<MatchStateAction>;
  setInitialStateFromCache: (matchState: MatchState) => void;
  addPoint: (
    pointData: RawPointInput,
    matchLength: MatchLength,
    initialServer: Player
  ) => void;
  changeServer: (server: Player) => void;
  removeLatestPoint: () => void;
  completeMatch: () => void;
  resetMatchState: () => void;
}>({
  state: defaultMatchState,
  dispatch: () => null,
  setInitialStateFromCache: () => null,
  addPoint: () => null,
  removeLatestPoint: () => null,
  changeServer: () => null,
  completeMatch: () => null,
  resetMatchState: () => null,
});
