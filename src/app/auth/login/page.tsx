"use client";

import { LoginForm } from "@/features/auth/components/login";
import { useRouter, useSearchParams } from "next/navigation";
import { Container } from "@/components/container/Container";
import { useNotification } from "@/context/notifications";

const LoginPage = () => {
  const router = useRouter();
  const redirect = useSearchParams().get("redirect") as string;
  const { showNotification } = useNotification();

  const onSuccess = () => {
    showNotification({
      type: "success",
      message: "ログインに成功しました",
      title: "ログイン成功",
    });
    if (redirect) {
      router.push(redirect);
    } else {
      router.push("/");
    }
  };

  const onError = () => {
    showNotification({
      type: "error",
      message: "ログインに失敗しました。id, name, passwordを確認してください",
      title: "ログイン失敗",
    });
  };

  return (
    <Container variant="center" height="auto">
      <LoginForm onSuccess={onSuccess} onError={onError} />
    </Container>
  );
};

export default LoginPage;
