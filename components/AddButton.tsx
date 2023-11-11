"use client";

import { cn } from "@/libs/utils";
import { useState } from "react";
import { Nunito_Sans } from "next/font/google";
import { LuPlus } from "react-icons/lu";
import Image from "next/image";
import { ActivityType } from "./ActivityCard";

const nunito = Nunito_Sans({ subsets: ["latin"] });

const ActivityBtn = ({
  open,
  type,
  position,
}: {
  open: boolean;
  type: ActivityType;
  position: string;
}) => {
  return (
    <div
      className={cn(
        "transition-all",
        open ? "-translate-x-10 -translate-y-10" : "hidden",
        "fixed h-20 w-20 bg-white right-0 bottom-0 rounded-full ease-in",
        open && position
      )}
    >
      <Image
        src={"/" + type + ".png"}
        alt={type + " add"}
        width={50}
        height={50}
        className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <span className="relative left-[18%] -bottom-8 text-black font-medium capitalize text-justify">
        {type}
      </span>
    </div>
  );
};

const AddButton = () => {
  const [open, setOpen] = useState<boolean>(false);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <>
      <div
        className={cn(
          nunito.className,
          "fixed w-full h-full z-40 transition-all ease-in-out",
          open ? "bg-stone-50/80 backdrop-blur-sm" : "bg-transparent z-0"
        )}
      >
        <ActivityBtn
          type={ActivityType.breakfast}
          open={open}
          position="top-1/3 left-1/2"
        />
        <ActivityBtn
          type={ActivityType.lunch}
          open={open}
          position="top-1/2 left-[25%]"
        />
        <ActivityBtn
          type={ActivityType.dinner}
          open={open}
          position="top-1/2 left-[75%]"
        />
        <ActivityBtn
          type={ActivityType.snack}
          open={open}
          position="top-2/3 left-[33%]"
        />
        <ActivityBtn
          type={ActivityType["physical activity"]}
          open={open}
          position="top-2/3 left-[66%]"
        />
      </div>
      <div
        onClick={handleClick}
        className="fixed right-5 bottom-5 xl:right-20 xl:bottom-20 rounded-full bg-lifesomme w-14 h-14 hover:bg-lifesomme cursor-pointer transition-all z-50"
      >
        <LuPlus
          className={cn(
            "relative text-white scale-100 h-10 w-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all",
            open ? "rotate-[135deg]" : "rotate-0"
          )}
        />
      </div>
    </>
  );
};

export default AddButton;
