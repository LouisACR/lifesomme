import CPFComp from "@/components/CPFComp";
import ProfileCard from "@/components/ProfileCard";
import TopMainComp from "@/components/TopMainComp";

export default function Home() {
  return (
    <div className="h-screen">
      <TopMainComp />
      <div className="relative max-w-screen-2xl mx-auto flex flex-col top-[350px] md:top-[425px]">
        <CPFComp />
        <ProfileCard />
      </div>
    </div>
  );
}
