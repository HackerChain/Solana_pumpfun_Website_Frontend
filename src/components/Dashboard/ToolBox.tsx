import { FilterIcon } from "../../assets";
import { TimeToolBox } from "./TimeToolBox";

export const ToolBox = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center gap-5 px-[30px] my-[24px]">
        <TimeToolBox />
        <div className="w-8 h-8 bg-secondary_dark_600 flex items-center justify-center rounded-md">
          <FilterIcon />
        </div>
      </div>
    </>
  );
};