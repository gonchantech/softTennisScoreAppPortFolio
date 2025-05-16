import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import styles from "./layout.module.css";
import "../../globals.css";
import { Protected } from "@/features/auth/components/protected/protected";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ソフトテニススコアキーパー",
  description: "ソフトテニスの試合スコアを記録・管理するアプリケーション",
};

export default function HistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Protected>{children}</Protected>;
}
