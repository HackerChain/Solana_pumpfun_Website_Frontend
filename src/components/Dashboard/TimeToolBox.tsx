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
  const [selected, setSelected] = useState(Tools[1].value);
  return (
    <>
      <div className="flex flex-row bg-secondary_dark_600 p-2 rounded-md  shadow-[inset_0_1px_1px_1px_#F6F7FA22] h-[36px] w-[185px] items-center justify-between">
        {Tools.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-md h-7 text-center text-sm py-1 px-2 items-center justify-center ${
              selected === item.value
                ? " bg-primary_dark_500 text-white shadow-[inset_0_-3px_5px_1px_#F6F7FA11]"
                : " text-[#79747E]"
            } hover:cursor-pointer hover:primary_dark_800 transition`}
            onClick={() => setSelected(item.value)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </>
  );
};
