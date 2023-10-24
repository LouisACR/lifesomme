"use client";

import { cn } from "@/libs/utils";
import Card from "./Card";
import { Nunito_Sans } from "next/font/google";
import waterIMG from "/public/water.png";
import Image from "next/image";
import { LuPlus } from "react-icons/lu";
import React, { useState } from "react";

const nunito = Nunito_Sans({ subsets: ["latin"] });

interface WaterProps {
  water: number;
  setWater: (water: number) => void;
  index: number;
}

interface WaterCardProps {
  date: Date;
}

const Water: React.FC<WaterProps> = ({ water, setWater, index }) => {
  const handleClick = () => {
    if (index == 1 && water == 1) {
      setWater(0);
    } else {
      setWater(index);
    }
  };
  return (
    <div className="relative cursor-pointer">
      <Image
        src={waterIMG}
        alt="Water"
        className={cn(water < index && "opacity-40", "transition-all")}
        width={30}
        onClick={handleClick}
      />
      {water + 1 == index && (
        <LuPlus
          className="absolute h-5 w-5 text-white z-20 top-1/2 left-1.5 -translate-y-1/2"
          onClick={handleClick}
        />
      )}
    </div>
  );
};

const WaterCard: React.FC<WaterCardProps> = ({ date }) => {
  const [water, setWater] = useState(0);
  return (
    <Card className={cn(nunito.className, "w-full col-span-1 px-4 py-3")}>
      <div className="flex justify-between mb-2">
        <div>Water</div>
        <div className="transition-all">{water * 0.25} l</div>
      </div>
      <div className="inline-flex">
        <Water water={water} setWater={setWater} index={1} />
        <Water water={water} setWater={setWater} index={2} />
        <Water water={water} setWater={setWater} index={3} />
        <Water water={water} setWater={setWater} index={4} />
        <Water water={water} setWater={setWater} index={5} />
        <Water water={water} setWater={setWater} index={6} />
        <Water water={water} setWater={setWater} index={7} />
        <Water water={water} setWater={setWater} index={8} />
      </div>
    </Card>
  );
};

export default WaterCard;
