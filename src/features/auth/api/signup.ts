import { useMutation } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import { AuthUser, AuthData } from "@/features/auth";

export const Signup = async (data: AuthData): Promise<{ user: AuthUser }> => {
  return apiClient.post("/auth/signup", data);
};

type UseSignupOptions = {
  onSuccess?: (user: AuthUser) => void;
};

export const useSignup = ({ onSuccess }: UseSignupOptions) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: Signup,
    onSuccess: ({ user }) => {
      onSuccess?.(user);
    },
    onError: (error) => {
      console.error("mutation error", error);
    },
  });

  return { submit, isPending };
};
