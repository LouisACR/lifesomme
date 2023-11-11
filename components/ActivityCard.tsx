import Card from "./Card";
import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import { cn } from "@/libs/utils";
import { LuPlus } from "react-icons/lu";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export enum ActivityType {
  "breakfast" = "breakfast",
  "lunch" = "lunch",
  "dinner" = "dinner",
  "snack" = "snack",
  "physical activity" = "physical activity",
}

export interface ActivityProps {
  date: Date;
  type: ActivityType;
}

const ActivityCard: React.FC<ActivityProps> = ({ date, type }) => {
  return (
    <Card className="w-full col-span-1">
      <div
        className={cn(nunito.className, "flex justify-between items-center")}
      >
        <div className="flex-none mr-3">
          <Image src={"/" + type + ".png"} alt={type} width={50} height={50} />
        </div>
        <div className="grow flex flex-col cursor-pointer">
          <span className="capitalize font-medium text-lg">{type}</span>
          <span className="text-stone-600 text-xs">
            Recommended: 360 - 540 kcal
          </span>
        </div>
        <div className="flex-none rounded-full bg-blanc dark:bg-stone-900 w-9 h-9 hover:bg-stone-200 cursor-pointer transition-all">
          <LuPlus className="relative h-6 w-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-stone-500" />
        </div>
      </div>
    </Card>
  );
};

export default ActivityCard;
