import { useState } from "react";

interface TimeRange {
  from: string;
  to: string;
}
export const MainSettingContent = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [workingHours, setWorkingHours] = useState<TimeRange>({
    from: "05:00",
    to: "21:30",
  });
  return (
    <>
      <div className="flex flex-col flex-1">
        <div className="flex flex-row items-center justify-between p-[24px] border-b-[1px] border-bg_gray_light h-[88px]">
          <div className="flex flex-col items-start">
            <p className="text-lg">General Settings</p>
            <p className="text-secondary_light_400 text-sm">
              Cuxtomize the overall experience and interface of crypto dashboard
            </p>
          </div>
          <div className="flex flex-row gap-2 ">
            <div className="flex items-center justify-center rounded-md bg-bg_gray_light shadow-[inset_0_-3px_5px_1px_#F6F7FA33] p-2 h-[46px] w-[120px]">
              Cancel
            </div>
            <div className="flex items-center justify-center rounded-md bg-primary_dark_700 shadow-[inset_0_-3px_5px_1px_#F6F7FA33] p-2 h-[46px] w-[120px]">
              Update
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[24px] p-[24px]">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col items-start">
              <p className="text-lg">Run the Bot</p>
              <p className="text-secondary_light_400 text-sm">
                Make the bot to run in real times
              </p>
            </div>
            <div className="flex items-center justify-between h-[30px] w-[100px]">
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

              <p className="text-base text-color_gray_light">
                {isEnabled ? "ON" : "OFF"}
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col items-start">
              <p className="text-lg">Working hours</p>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-start">
                <p className="text-xs text-secondary_light_300">From</p>
                <input
                  type="time"
                  value={workingHours.from}
                  onChange={(e) =>
                    setWorkingHours({ ...workingHours, from: e.target.value })
                  }
                  className="bg-bg_gray_light rounded px-4 py-2 w-[160px] h-[46px]"
                />
              </div>
              <div className="flex flex-col items-start">
                <p className="text-xs text-secondary_light_300">To</p>
                <input
                  type="time"
                  value={workingHours.to}
                  onChange={(e) =>
                    setWorkingHours({ ...workingHours, to: e.target.value })
                  }
                  className="bg-bg_gray_light rounded px-4 py-2 w-[160px] h-[46px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
