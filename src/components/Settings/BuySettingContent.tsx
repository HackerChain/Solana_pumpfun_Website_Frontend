import { useState } from "react";

interface TimeRange {
  from: string;
  to: string;
}
export const BuySettingContent = () => {
  const [workingHours, setWorkingHours] = useState<TimeRange>({
    from: "05:00",
    to: "21:30",
  });
  return (
    <>
      <div className="flex flex-col flex-1">
        <div className="flex flex-row items-center justify-between p-[24px] border-b-[1px] border-bg_gray_light h-[88px]">
          <div className="flex flex-col items-start">
            <p className="text-lg">Buy</p>
            <p className="text-secondary_light_400 text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla
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
              <p className="text-lg">Working hours</p>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-start">
                <p className="text-xs text-secondary_light_300">MCminlimit,$</p>
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
                <p className="text-xs text-secondary_light_300">MCminlimit,$</p>
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
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col items-start">
              <p className="text-lg">Working hours</p>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-start">
                <p className="text-xs text-secondary_light_300">Slippage, %</p>
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
                <p className="text-xs text-secondary_light_300">MaxGAZprise</p>
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
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col items-start">
              <p className="text-lg">Working hours</p>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-start">
                <p className="text-xs text-secondary_light_300">
                  Investment per token
                </p>
                <input
                  type="time"
                  value={workingHours.from}
                  onChange={(e) =>
                    setWorkingHours({ ...workingHours, from: e.target.value })
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
