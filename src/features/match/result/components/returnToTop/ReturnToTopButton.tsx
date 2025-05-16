"use client";
import styles from "./ReturnToTopButton.module.css";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/button";

export const ReturnToTopButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <Button color="gray" size="md" onClick={handleClick} fullWidth>
        トップ画面へ戻る
      </Button>
    </div>
  );
};
