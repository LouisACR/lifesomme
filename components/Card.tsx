import { cn } from "@/libs/utils";
import * as React from "react";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    className={cn(
      "flex flex-col bg-stone-50 dark:bg-stone-800 rounded-xl p-6 border dark:border-stone-700 shadow",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
  </div>
));
Card.displayName = "Card";

export default Card;
