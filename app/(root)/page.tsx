import NewsSection from "@/components/NewsSection";
import SearchSection from "@/components/SearchSection";
import WeatherMap from "@/components/WeatherMap";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <SearchSection />
      <NewsSection />
      <WeatherMap />
    </main>
  );
}
