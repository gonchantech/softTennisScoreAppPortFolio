import { useMutation } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";
import { queryClient } from "@/lib/reactQuery";

import { AuthUser, LoginData } from "@/features/auth";

export const Login = async (data: LoginData): Promise<{ user: AuthUser }> => {
  return apiClient.post("/auth/login", data);
};

type UseLoginOptions = {
  onSuccess?: (user: AuthUser) => void;
};

export const useLogin = ({ onSuccess }: UseLoginOptions) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: Login,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["auth-user"], user);
      onSuccess?.(user);
    },
    onError: (error) => {
      console.error("mutation error", error);
    },
  });

  return { submit, isPending };
};
