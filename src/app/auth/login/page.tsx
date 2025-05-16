"use client";
import styles from "./page.module.css";
import { LoginForm } from "@/features/auth/components/login";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>ログイン</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
