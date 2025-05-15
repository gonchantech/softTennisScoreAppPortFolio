import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";
import { MatchResultMeta } from "../match-setup";

export const getMatches = (): Promise<MatchResultMeta[]> => {
  return apiClient.get("/matches");
};

export const useMatches = () => {
  const { data, isFetching, isFetched } = useQuery({
    queryKey: ["matches"],
    queryFn: () => getMatches(),
    initialData: [],
  });

  return {
    data,
    isLoading: isFetching && !isFetched,
  };
};
