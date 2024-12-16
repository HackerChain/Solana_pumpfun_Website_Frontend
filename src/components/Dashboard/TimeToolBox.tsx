import { useState } from "react";

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

export const TimeToolBox = () => {
  const [selected, setSelected] = useState(Tools[2].value);
  return (
    <>
      <div className="flex flex-row gap-1">
        {Tools.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-md h-8 text-center text-sm py-1 px-3 ${
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
    </>
  );
};
