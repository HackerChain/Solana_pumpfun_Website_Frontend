import { ToolBoxProps } from "../../types";

const Tools = ["15m", "3h", "6h"];
export const TimeToolBox = ({ during, setDuring }: ToolBoxProps) => {
  return (
    <>
      <div className="flex flex-row bg-secondary_dark_600 p-2 rounded-md  shadow-[inset_0_1px_1px_1px_#F6F7FA22] h-[36px] w-[125px] items-center justify-between">
        {Tools.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-md h-7 text-center text-sm py-1 w-[36px] items-center justify-center ${
              during === item
                ? " bg-primary_dark_500 text-white shadow-[inset_0_-3px_5px_1px_#F6F7FA11]"
                : " text-[#79747E] hover:cursor-pointer hover:bg-primary_dark_700 transition duration-300 ease-in-out"
            } hover:cursor-pointer hover:primary_dark_800 transition`}
            onClick={() => setDuring(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};
