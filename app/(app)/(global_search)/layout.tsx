import { SearchBar } from "@/components/global";

export default function GlobalSearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SearchBar className="bg-primary" />
      {children}
    </>
  );
}
