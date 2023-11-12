"use client";

import { cn } from "@/libs/utils";
import { useState } from "react";
import { Nunito_Sans } from "next/font/google";
import { LuPlus } from "react-icons/lu";
import Image from "next/image";
import { ActivityType } from "./ActivityCard";

const nunito = Nunito_Sans({ subsets: ["latin"] });

interface ActivityBtnProps {
  open: boolean;
  type: ActivityType;
  position: string;
  setOpen: (open: boolean) => void;
}

const ActivityBtn: React.FC<ActivityBtnProps> = ({
  open,
  type,
  position,
  setOpen,
}) => {
  return (
    <div
      onClick={() => setOpen(false)}
      className={cn(
        "hover:scale-110 cursor-pointer transition-all",
        open ? "-translate-x-10 -translate-y-10" : "scale-0",
        "fixed h-20 w-20 bg-white dark:bg-stone-800 right-0 bottom-0 rounded-full ease-in",
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
      <span className="flex relative -bottom-8 font-medium capitalize">
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
  function activityClick(type: ActivityType) {}
  return (
    <>
      <div
        className={cn(
          nunito.className,
          "fixed w-full h-full z-40 transition-all ease-in-out",
          open
            ? "bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-sm"
            : "bg-transparent z-0"
        )}
      >
        <ActivityBtn
          type={ActivityType.breakfast}
          open={open}
          position="top-1/4 left-1/2"
          setOpen={setOpen}
        />
        <ActivityBtn
          type={ActivityType.lunch}
          open={open}
          position="top-1/3 left-[25%]"
          setOpen={setOpen}
        />
        <ActivityBtn
          type={ActivityType.dinner}
          open={open}
          position="top-1/3 left-[75%]"
          setOpen={setOpen}
        />
        <ActivityBtn
          type={ActivityType.snack}
          open={open}
          position="top-1/2 left-[33%]"
          setOpen={setOpen}
        />
        <ActivityBtn
          type={ActivityType["physical activity"]}
          open={open}
          position="top-1/2 left-[66%]"
          setOpen={setOpen}
        />
      </div>
      <div
        onClick={handleClick}
        className="fixed right-5 bottom-20 xl:right-20 xl:bottom-20 rounded-full bg-lifesomme w-14 h-14 hover:scale-110 cursor-pointer transition-all z-50"
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
