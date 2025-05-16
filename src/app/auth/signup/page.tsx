"use client";
import { SignupForm } from "@/features/auth/components/signup";
import { useRouter } from "next/navigation";
import { Container } from "@/components/container/Container";

const SignupPage = () => {
  const router = useRouter();

  const onSuccess = () => {
    router.push("/auth/login");
  };
  return (
    <Container variant="center" height="auto">
      <SignupForm onSuccess={onSuccess} />
    </Container>
  );
};

export default SignupPage;
