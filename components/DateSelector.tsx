import { cn } from "@/libs/utils";
import { Nunito_Sans } from "next/font/google";
import { LuCalendar, LuChevronLeft, LuChevronRight } from "react-icons/lu";

const nunito = Nunito_Sans({ subsets: ["latin"] });

interface DateSelectorProps {
  date: Date;
  setDate: (date: Date) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ date, setDate }) => {
  // TODO: Add clickable date string to open modal to choose date
  function prettyDate() {
    if (date.toDateString() === new Date().toDateString()) {
      return (
        "Today, " +
        date.getUTCDate() +
        " " +
        date.toLocaleString("en", { month: "long" }).slice(0, 3)
      );
    } else {
      return (
        date.getUTCDate() +
        " " +
        date.toLocaleString("en", { month: "long" }).slice(0, 3)
      );
    }
  }

  function changeDate(amount: number) {
    setDate(new Date(date.getTime() + amount * 24 * 60 * 60 * 1000));
  }

  return (
    <div
      className={cn(
        nunito.className,
        "uppercase flex w-full px-6 my-4 justify-between mx-auto items-center max-w-[600px]"
      )}
    >
      <LuChevronLeft
        className="h-6 w-6 text-stone-600 dark:text-stone-400 cursor-pointer hover:scale-110 focus:scale-110 transition-all"
        onClick={() => changeDate(-1)}
      />
      <span className="inline-flex items-center font-bold tracking-wide text-stone-600 dark:text-stone-400">
        <LuCalendar className="mr-2" />
        {prettyDate()}
      </span>
      <LuChevronRight
        className="h-6 w-6 text-stone-600 dark:text-stone-400 cursor-pointer hover:scale-110 focus:scale-110 transition-all"
        onClick={() => changeDate(1)}
      />
    </div>
  );
};

export default DateSelector;
