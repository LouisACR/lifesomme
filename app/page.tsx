import ProfileCard from "@/components/ProfileCard";
import ThemeToggle from "@/components/ThemeToggle";
import TopMainComp from "@/components/TopMainComp";

export default function Home() {
  return (
    <div className="h-screen">
      <TopMainComp />
      <div className="relative max-w-screen-2xl mx-auto flex flex-col top-[45%] md:top-[40%]">
        <ThemeToggle />
        <ProfileCard />
      </div>
    </div>
  );
}
