"use client";

import React, { useState } from "react";
import Card from "./Card";
import { Progress } from "./Progress";

const CPFComp = () => {
  const [carbs, setCarbs] = useState(214);
  const [protein, setProtein] = useState(82);
  const [fat, setFat] = useState(56);
  return (
    <div className="relative -top-16 m-5 z-20">
      <Card className="flex-row w-full gap-x-6 md:gap-x-10 mx-auto max-w-[600px]">
        <div className="col-span-4 flex flex-col gap-y-1 w-full text-center">
          <span>Carbs</span>
          <Progress
            color={"#fa9d2d"}
            value={(carbs / 380) * 100}
            className="w-full"
          />
          <span className="text-xs">{`${carbs}/380g`}</span>
        </div>
        <div className="col-span-4 flex flex-col gap-y-1 w-full text-center">
          <span>Protein</span>
          <Progress
            color={"#f07de5"}
            value={(protein / 152) * 100}
            className="w-full"
          />
          <span className="text-xs">{`${protein}/152g`}</span>
        </div>
        <div className="col-span-4 flex flex-col gap-y-1 w-full text-center">
          <span>Fat</span>
          <Progress
            color={"#8552e0"}
            value={(fat / 101) * 100}
            className="w-full"
          />
          <span className="text-xs">{`${fat}/101g`}</span>
        </div>
      </Card>
    </div>
  );
};

export default CPFComp;
