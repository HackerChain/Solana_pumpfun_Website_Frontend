import { useState } from "react";
import { SideDropdown } from "./SideDropDown";
import { SingleCalendarPicker } from "./SingleCalendarPicker";

const Tools = [
  {
    title: "1m",
    value: "1",
  },
  {
    title: "5m",
    value: "2",
  },
  {
    title: "1h",
    value: "3",
  },
  {
    title: "6h",
    value: "4",
  },
  {
    title: "24h",
    value: "5",
  },
];

export const ToolBox = () => {
  const [selected, setSelected] = useState(Tools[2].value);
  const [isEnabled, setIsEnabled] = useState(true);
  const [sideSelected, setSideSelected] = useState("All");
  const options = ["All", "Buy", "Sell", "Swap"];
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <div className="flex flex-row justify-center items-center gap-5">
        <div className="flex flex-row justify-start items-center gap-5">
          <SideDropdown
            options={options}
            selected={sideSelected}
            onSelect={setSideSelected}
          />
          <SingleCalendarPicker
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
          />
        </div>
        <div className="flex flex-col justify-start items-start w-[250px] gap-2">
          <div className="flex flex-row justify-start items-center gap-5">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsEnabled(!isEnabled)}
                className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none
          ${isEnabled ? "bg-color_pink" : "bg-gray-400"}`}
              >
                <div
                  className={`absolute w-4 h-4 bg-white rounded-full transition-transform duration-300 transform
            ${isEnabled ? "translate-x-2" : "-translate-x-4"} top-1`}
                />
              </button>
            </div>
            <span className="text-xs text-color_gray_light">Real time</span>
          </div>
          <div className="flex flex-row gap-1">
            {Tools.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-lg text-center text-sm px-3 ${
                  selected === item.value
                    ? "border-[1px] border-color_yellow_dark bg-color_yellow_dark text-white"
                    : "border-[1px] border-[#79747E] text-[#79747E]"
                } hover:cursor-pointer hover:bg-slate-300 transition`}
                onClick={() => setSelected(item.value)}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
