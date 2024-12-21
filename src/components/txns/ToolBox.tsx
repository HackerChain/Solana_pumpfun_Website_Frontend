import { useState } from "react";
import { SingleCalendarPicker } from "./SingleCalendarPicker";
import { TimeToolBox } from "../Dashboard/TimeToolBox";
import { ExportIcon, FilterIcon } from "../../assets";

export const ToolBox = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <div className="flex flex-row justify-between items-center gap-5 px-[30px] my-[24px]">
        <div className="flex flex-row justify-start items-center gap-5">
          <TimeToolBox />
          <SingleCalendarPicker
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
          />
          <div className="flex items-center justify-between h-[30px] w-[145px]">
            <button
              onClick={() => setIsEnabled(!isEnabled)}
              className={`relative w-12 h-[30px] rounded-full transition-colors duration-300 focus:outline-none
          ${isEnabled ? "bg-primary_dark_600" : "bg-bg_gray_light"}`}
            >
              <div
                className={`absolute w-[24px] h-[24px] bg-white rounded-full transition-transform duration-300 transform
            ${isEnabled ? "translate-x-0" : "-translate-x-4"} top-[1px]`}
              />
            </button>

            <p className="text-base text-color_gray_light">Real time</p>
          </div>
        </div>
        <div className="flex flex-row justify-end  items-center w-[250px] gap-4">
          <div className="w-8 h-8 bg-secondary_dark_600 flex items-center justify-center rounded-md hover:cursor-pointer hover:bg-primary_dark_700 transition duration-300 ease-in-out">
            <FilterIcon />
          </div>
          <div className="w-[127px] h-[40px] flex items-center gap-2 justify-center bg-primary_dark_700 shadow-[inset_0_0px_30px_10px_#F6F7FA33] rounded-md hover:cursor-pointer hover:bg-primary_dark_900 transition duration-300 ease-in-out">
            <ExportIcon />
            <p className="text-sm text-white font-bold">Export</p>
          </div>
        </div>
      </div>
    </>
  );
};
