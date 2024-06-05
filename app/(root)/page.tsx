import NewsSection from "@/components/NewsSection";
import SearchSection from "@/components/SearchSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <SearchSection />
      <NewsSection />
    </main>
  );
}
