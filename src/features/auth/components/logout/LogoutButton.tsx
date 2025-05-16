"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/button/Button";
import { useLogout } from "@/features/auth/api/logout";

export const LogoutButton: React.FC = () => {
  const router = useRouter();
  const { submit: logout, isPending } = useLogout({
    onSuccess: () => {
      router.push("/");
    },
  });

  return (
    <Button
      onClick={() => logout()}
      variant="solid"
      size="md"
      color="secondary"
      isLoading={isPending}
    >
      ログアウト
    </Button>
  );
};
