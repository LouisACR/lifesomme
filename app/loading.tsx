import { ImSpinner4 } from "react-icons/im";

export default function Loading() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-blanc dark:bg-stone-900 z-10 transition-all">
      <ImSpinner4 className="animate-spin absolute top-[48%] left-[49%] h-16 w-16" />
    </div>
  );
}
