import { cn } from "@/libs/utils";
import * as React from "react";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    className={cn(
      "flex flex-col bg-stone-50 rounded-xl p-6 border shadow",
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
