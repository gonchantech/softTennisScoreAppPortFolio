import { MatchMeta } from "@/features/scoring/match-setup/types/match-setup";
import { createContext } from "react";
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
