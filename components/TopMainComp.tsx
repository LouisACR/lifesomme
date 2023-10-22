"use client";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TextLogo from "./TextLogo";
import { useState } from "react";
import { Button } from "./Button";
import { cn } from "@/libs/utils";
import { Nunito_Sans } from "next/font/google";
import { LuSettings, LuUser2 } from "react-icons/lu";

const nunito = Nunito_Sans({ subsets: ["latin"] });

const TopMainComp = () => {
  const [eaten, setEaten] = useState(1655);
  const totalKcal = 3030;
  const kcalBurned = 539;
  return (
    <div className="cool-gradient w-full h-[45%] md:h-2/5 max-h-[500px]">
      <div className="relative flex flex-col max-w-screen-2xl mx-auto z-10">
        <div className="absolute top-5 left-5 h-7 w-7 lg:left-10 lg:top-11 lg:w-fit lg:h-fit transition-all">
          <LuSettings className="text-white h-full w-full lg:hidden" />
          <Button variant="link" className="hidden text-xl lg:flex">
            <LuSettings className="text-white h-7 w-7 mr-2" />
            Settings
          </Button>
        </div>
        <div className="absolute top-5 right-5 h-7 w-7 lg:right-10 lg:top-11 lg:w-fit lg:h-fit transition-all">
          <LuUser2 className="text-white h-full w-full lg:hidden" />
          <Button variant="link" className="hidden text-xl lg:flex">
            <LuUser2 className="text-white h-7 w-7 mr-2" />
            Profile
          </Button>
        </div>
        <TextLogo className="mx-auto text-4xl text-white md:text-5xl xl:text-6xl mt-4 mb-4" />
        <div className="flex flex-col absolute left-5 top-1/2 md:left-1/4 text-center text-white opacity-90">
          <span className="text-3xl md:text-5xl">{eaten}</span>
          <span className={cn(nunito.className, "text-sm font-medium")}>
            EATEN
          </span>
        </div>
        <div className="flex flex-col absolute right-5 top-1/2 md:right-1/4 text-center text-white opacity-90">
          <span className="text-3xl md:text-5xl">{kcalBurned}</span>
          <span className={cn(nunito.className, "text-sm font-medium")}>
            BURNED
          </span>
        </div>
        <div className="w-[47%] md:w-[35%] lg:w-[25%] xl:w-[20%] 2xl:w-[225px] mx-auto">
          <CircularProgressbarWithChildren
            value={((eaten - kcalBurned) / totalKcal) * 100}
            text={""}
            strokeWidth={4}
            className="lining-nums proportional-nums"
            styles={buildStyles({
              strokeLinecap: "round",
              pathTransitionDuration: 0.5,
              textColor: "#ffffff",
              trailColor: "rgba(255,255,255,0.3)",
              pathColor: "#ffffff",
              backgroundColor: "rgba(255,255,255,0)",
            })}
          >
            <span className="text-white font-medium text-5xl md:text-6xl lg:text-7xl">
              {totalKcal - eaten}
            </span>
            <span
              className={cn(
                nunito.className,
                "text-white font-regular text-sm mt-1"
              )}
            >
              KCAL LEFT
            </span>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
};

export default TopMainComp;
