import { useMutation } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";
import { queryClient } from "@/lib/reactQuery";
import { Match, MatchResult } from "../types/match";

type SaveMatchParams = {
  match: Match;
};

export const saveMatch = ({ match }: SaveMatchParams) => {
  return apiClient.post("/matches", match);
};

type UseSaveMatchParams = {
  onSuccess?: (match: MatchResult) => void;
};

export const useSaveMatch = ({ onSuccess }: UseSaveMatchParams = {}) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: saveMatch,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["matches"] });
      onSuccess?.(response.data);
    },
  });

  return {
    submit,
    isLoading: isPending,
  };
};
