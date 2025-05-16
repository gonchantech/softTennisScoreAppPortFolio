"use client";

import { LoginForm } from "@/features/auth/components/login";
import { useRouter, useSearchParams } from "next/navigation";
import { Container } from "@/components/container/Container";

const LoginPage = () => {
  const router = useRouter();
  const redirect = useSearchParams().get("redirect") as string;

  const onSuccess = () => {
    if (redirect) {
      router.push(redirect);
    } else {
      router.push("/");
    }
  };
  return (
    <Container variant="center" height="auto">
      <LoginForm onSuccess={onSuccess} />
    </Container>
  );
};

export default LoginPage;
