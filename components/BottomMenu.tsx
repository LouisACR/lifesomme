import Link from "next/link";
import {
  GiShinyApple,
  GiChefToque,
  GiChart,
  GiWhiteBook,
} from "react-icons/gi";

export const BottomMenuBtn = () => {
  return (
    <>
      <div className="flex flex-col mx-auto text-lifesomme cursor-pointer">
        <Link href="/">
          <GiWhiteBook className="h-8 w-8 ml-1 mt-2" />
          <span className="text-xs text-center">Journal</span>
        </Link>
      </div>
      <div className="flex flex-col mx-auto text-stone-400 cursor-pointer">
        <Link href="/progress">
          <GiChart className="translate-x-1/4 h-8 w-8 mt-2" />
          <span className="text-xs text-center">Progress</span>
        </Link>
      </div>
      <div className="flex flex-col mx-auto text-stone-400 cursor-pointer">
        <Link href="/diets">
          <GiShinyApple className="h-8 w-8 mt-2" />
          <span className="text-xs text-center">Diets</span>
        </Link>
      </div>
      <div className="flex flex-col mx-auto text-stone-400 cursor-pointer">
        <Link href="/recipes">
          <GiChefToque className="h-8 w-8 mt-2 ml-1.5" />
          <span className="text-xs text-center">Recipes</span>
        </Link>
      </div>
    </>
  );
};

const BottomMenu = () => {
  return (
    <div className="fixed flex flex-row xl:hidden bottom-0 z-40 border-t-2 dark:border-stone-700 bg-white dark:bg-stone-800 h-16 w-full">
      <BottomMenuBtn />
    </div>
  );
};

export default BottomMenu;
