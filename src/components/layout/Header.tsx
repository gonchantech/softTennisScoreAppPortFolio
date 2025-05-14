import React from "react";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>ソフトテニススコアキーパー</h1>
      </div>
    </header>
  );
};
