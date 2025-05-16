"use client";

import { Button } from "@/components/button/Button";
import { useLogout } from "@/features/auth/api/logout";

export const LogoutButton: React.FC<{ onSuccess: () => void }> = ({
  onSuccess,
}) => {
  const { submit: logout, isPending } = useLogout({ onSuccess });

  return (
    <Button
      onClick={() => logout()}
      variant="solid"
      size="md"
      color="gray"
      isLoading={isPending}
    >
      ログアウト
    </Button>
  );
};
