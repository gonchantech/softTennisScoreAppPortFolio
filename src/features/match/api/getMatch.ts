import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";
import { MatchResult } from "../types/match";

type GetMatchParams = {
  matchId: string;
};

export const getMatch = ({ matchId }: GetMatchParams): Promise<MatchResult> => {
  return apiClient.get(`/matches/${matchId}`);
};

export const useMatch = ({ matchId }: GetMatchParams) => {
  const { data, isLoading } = useQuery({
    queryKey: ["match", matchId],
    queryFn: () => getMatch({ matchId }),
    enabled: !!matchId,
  });

  return {
    data,
    isLoading,
  };
};
