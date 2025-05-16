"use client";
import styles from "./page.module.css";
import { SignupForm } from "@/features/auth/components/signup";

const SignupPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>新規登録</h1>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
