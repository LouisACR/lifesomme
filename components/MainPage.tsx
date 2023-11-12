"use client";

import TopMainComp from "./TopMainComp";
import CPFComp from "./CPFComp";
import { useState } from "react";
import DateSelector from "./DateSelector";
import ActivityCard, { ActivityType } from "./ActivityCard";
import WaterCard from "./WaterCard";
import AddButton from "./AddButton";
import BottomMenu, { BottomMenuBtn } from "./BottomMenu";
import Card from "./Card";

const MainPage = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <div className="h-screen">
      <TopMainComp date={date} />
      <AddButton />
      <BottomMenu />
      <div className="relative max-w-screen-2xl mx-auto flex flex-col top-[350px] md:top-[425px]">
        <CPFComp date={date} />
      </div>
      <div className="relative max-w-screen-2xl mx-auto flex flex-col top-[265px] md:top-[340px]">
        <DateSelector date={date} setDate={setDate} />
        <div className="items-center mb-20 xl:mb-0 px-5 mx-0 xl:px-0 xl:mx-auto w-full max-w-screen-xl">
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
            <Card className="w-full hidden xl:flex xl:flex-row xl:col-span-3">
              <BottomMenuBtn />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
