import { createContext } from "react";
import { MatchMeta } from "@/features/match/match-setup/types";
import { MatchMetaAction } from "./types/MatchMetaAction";
import { defaultMatchMeta } from "./constants/defaultMatchMeta";

export const MatchMetaContext = createContext<{
  state: MatchMeta;
  dispatch: React.Dispatch<MatchMetaAction>;
  setupMatchMetaFromCache: (matchMeta: MatchMeta) => void;
  setupMatchMeta: (matchMetaData: Partial<MatchMeta>) => void;
  resetMatchMeta: () => void;
}>({
  state: defaultMatchMeta,
  dispatch: () => null,
  setupMatchMetaFromCache: () => null,
  setupMatchMeta: () => null,
  resetMatchMeta: () => null,
});
