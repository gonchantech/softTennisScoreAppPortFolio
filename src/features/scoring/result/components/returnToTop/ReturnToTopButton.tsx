"use client";

import React from "react";
import { Button } from "@/components/button";
import styles from "./ReturnToTopButton.module.css";

export const ReturnToTopButton: React.FC = () => {
  return (
    <div className={styles.container}>
      <Button
        color="gray"
        size="md"
        onClick={() => {
          // ページの先頭に戻る処理をここに実装してください
        }}
        fullWidth
      >
        トップ画面へ戻る
      </Button>
    </div>
  );
};
