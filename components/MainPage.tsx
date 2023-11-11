"use client";

import TopMainComp from "./TopMainComp";
import CPFComp from "./CPFComp";
import { useState } from "react";
import DateSelector from "./DateSelector";
import ActivityCard, { ActivityType } from "./ActivityCard";
import WaterCard from "./WaterCard";
import AddButton from "./AddButton";

const MainPage = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <div className="h-screen">
      <TopMainComp date={date} />
      <AddButton />
      <div className="relative max-w-screen-2xl mx-auto flex flex-col top-[350px] md:top-[425px]">
        <CPFComp date={date} />
      </div>
      <div className="relative max-w-screen-2xl mx-auto flex flex-col top-[265px] md:top-[340px]">
        <DateSelector date={date} setDate={setDate} />
        <div className="items-center px-5 mx-0 md:px-0 md:mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <WaterCard date={date} />
            <ActivityCard date={date} type={ActivityType.breakfast} />
            <ActivityCard date={date} type={ActivityType.lunch} />
            <ActivityCard date={date} type={ActivityType.dinner} />
            <ActivityCard date={date} type={ActivityType.snack} />
            <ActivityCard
              date={date}
              type={ActivityType["physical activity"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
