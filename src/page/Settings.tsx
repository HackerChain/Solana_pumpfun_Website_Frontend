import { useState } from "react";
import { CustomInputInterface } from "../types/setting";
import { CustomInput } from "../components/Settings/CustomInput";
import { CustomTogglebtn } from "../components/CustomTogglebtn";
import { DegenAuditBox } from "../components/Settings/DegenAuditBox";
interface TimeRange {
  from: string;
  to: string;
}

export const Settings = () => {
  const [workingHours, setWorkingHours] = useState<TimeRange>({
    from: "05:00",
    to: "21:30",
  });
  const BuyInputs: CustomInputInterface[] = [
    {
      label: "MC min limit, $",
      value: 1000,
      unit: "$",
    },
    {
      label: "MC max limit, $",
      value: 10000,
      unit: "$",
    },
    {
      label: "Slippage, %",
      value: 1,
      unit: "%",
    },
    {
      label: "Max GAS prise",
      value: 5,
      unit: "$",
    },
    {
      label: "Investment per token",
      value: 20,
      unit: "$",
    },
  ];
  const SellInputs: CustomInputInterface[] = [
    {
      label: "Sale 1: % from Investment amount",
      value: 25,
      unit: "%",
    },
    {
      label: "Revenue",
      value: 2,
      unit: "X",
    },
    {
      label: "Sale 2: % from Investment amount",
      value: 25,
      unit: "%",
    },
    {
      label: "Revenue",
      value: 10,
      unit: "X",
    },
    {
      label: "Sale 3: % from Investment amount",
      value: 25,
      unit: "%",
    },
    {
      label: "Revenue",
      value: 50,
      unit: "X",
    },
    {
      label: "Sale 4: % from Investment amount",
      value: 25,
      unit: "%",
    },
    {
      label: "Revenue",
      value: 100,
      unit: "X",
    },
  ];
  const StopsellMC = {
    label: "Stop sell MC (token will migrate to the Radium, manual sale",
    value: 80000,
    unit: "$",
  };
  const LosslinkitMC = {
    label: "Loss limit MC (sell all)",
    value: 500,
    unit: "$",
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Run the Bot Section */}
        <div className="space-y-8">
          <h2 className="text-4xl font-medium text-start">Run the Bot</h2>
          <div className="flex items-center gap-2 relative">
            <CustomTogglebtn label="On / Off" />
          </div>
        </div>

        {/* Working Hours Section */}
        <div className="space-y-8">
          <h2 className="text-4xl font-medium text-start">Working hours</h2>
          <div className="flex gap-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-400">From</label>
              <input
                type="time"
                value={workingHours.from}
                onChange={(e) =>
                  setWorkingHours({ ...workingHours, from: e.target.value })
                }
                className="bg-gray-800 rounded px-4 py-2 w-28"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">To</label>
              <input
                type="time"
                value={workingHours.to}
                onChange={(e) =>
                  setWorkingHours({ ...workingHours, to: e.target.value })
                }
                className="bg-gray-800 rounded px-4 py-2 w-28"
              />
            </div>
          </div>
        </div>

        {/* Buy Section */}
        <div className="space-y-8">
          <h2 className="text-4xl font-medium text-start">Buy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BuyInputs.map((item, index) => (
              <CustomInput key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Sell Section */}
        <div className="space-y-8">
          <h2 className="text-4xl font-medium text-start">Sell</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SellInputs.map((item, index) => (
              <CustomInput key={index} {...item} />
            ))}
          </div>
          <CustomInput {...StopsellMC} />
          <CustomInput {...LosslinkitMC} />
        </div>
        <DegenAuditBox />
        <div className="bg-color_green_dark text-color_gray_white rounded-md p-3 text-3xl w-52 hover:bg-green-700 hover:cursor-pointer transition-all duration-300">
          Save
        </div>
      </div>
    </div>
  );
};
