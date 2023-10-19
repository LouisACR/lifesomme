import { cn } from "@/libs/utils";
import React from "react";

interface Props {
  className?: string;
}

const TextLogo = (props: Props) => {
  return (
    <span className={cn(props.className, "tracking-tighter font-medium")}>
      Lifesomme<span className="text-xs font-black absolute">®</span>
    </span>
  );
};

export default TextLogo;
