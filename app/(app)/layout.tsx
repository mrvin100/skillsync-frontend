import { Footer, Header } from "@/components/global";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Skill Sync",
  description: "Find the perfect freelance service for your ",
};
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
