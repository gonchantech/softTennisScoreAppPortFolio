import { MatchMeta, MatchResultMeta, PointData } from "../";

export interface Match {
  matchMeta: MatchMeta;
  points: PointData[];
}

export interface MatchResult {
  matchResultMeta: MatchResultMeta;
  points: PointData[];
}
