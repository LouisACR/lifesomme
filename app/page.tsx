import ProfileCard from "@/components/ProfileCard";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="cool-gradient w-full h-1/2"></div>
      <ThemeToggle />
      <ProfileCard />
    </div>
  );
}
