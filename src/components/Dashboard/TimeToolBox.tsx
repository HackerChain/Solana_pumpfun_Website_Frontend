import { useState } from "react";

const Tools = [
  {
    title: "15m",
    value: "1",
  },
  {
    title: "3h",
    value: "2",
  },
  {
    title: "6h",
    value: "3",
  },
];

export const TimeToolBox = () => {
  const [selected, setSelected] = useState(Tools[0].value);
  return (
    <>
      <div className="flex flex-row bg-secondary_dark_600 p-2 rounded-md  shadow-[inset_0_1px_1px_1px_#F6F7FA22] h-[36px] w-[125px] items-center justify-between">
        {Tools.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-md h-7 text-center text-sm py-1 w-[36px] items-center justify-center ${
              selected === item.value
                ? " bg-primary_dark_500 text-white shadow-[inset_0_-3px_5px_1px_#F6F7FA11]"
                : " text-[#79747E] hover:cursor-pointer hover:bg-primary_dark_700 transition duration-300 ease-in-out"
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
