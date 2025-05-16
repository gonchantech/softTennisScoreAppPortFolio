"use client";

import { useRouter } from "next/navigation";
import { MatchSetupForm } from "@/features/match/match-setup/components/MatchSetupForm";

export default function MatchSetupPage() {
  const router = useRouter();
  const onSubmit = () => {
    router.push("/match");
  };
  return (
    <>
      <MatchSetupForm onSubmit={onSubmit} />
    </>
  );
}
