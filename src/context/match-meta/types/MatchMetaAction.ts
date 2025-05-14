import { MatchMeta } from "@/features/scoring/match-setup/types/match-setup";

export type MatchMetaAction =
  | { type: "SET_MATCH_META_FROM_CACHE"; payload: MatchMeta }
  | { type: "SETUP_MATCH_META"; payload: Partial<MatchMeta> }
  | { type: "RESET_MATCH_META" };
