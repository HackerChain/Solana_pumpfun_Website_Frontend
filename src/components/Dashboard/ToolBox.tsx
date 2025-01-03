import { FilterIcon } from "../../assets";
import { ToolBoxProps } from "../../types";
import { TimeToolBox } from "./TimeToolBox";

export const ToolBox = ({ during, setDuring }: ToolBoxProps) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center gap-5 px-[30px] my-[24px]">
        <TimeToolBox during={during} setDuring={setDuring} />
        <div className="w-8 h-8 bg-secondary_dark_600 flex items-center justify-center rounded-md hover:cursor-pointer hover:bg-primary_dark_700 transition duration-300 ease-in-out">
          <FilterIcon />
        </div>
      </div>
    </>
  );
};
