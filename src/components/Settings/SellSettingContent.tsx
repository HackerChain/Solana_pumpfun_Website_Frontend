import { useState } from "react";
import { CloseIcon4SellInput } from "../../assets";

interface SaleMilstone {
  salePercent: number;
  revenue: number;
}

export const SellSettingContent = () => {
  const [salePercent, setSalePercent] = useState<SaleMilstone[]>([
    { salePercent: 25, revenue: 2 },
    { salePercent: 25, revenue: 10 },
    { salePercent: 25, revenue: 50 },
    { salePercent: 25, revenue: 100 },
  ]);
  const [ManualValue, setManualValue] = useState<number[]>([25, 100]);

  const SellSettingData = [
    {
      lable: ["Sale1: % from Investment amount", "Revenue"],
      value: [salePercent[0].salePercent, salePercent[0].revenue],
    },
    {
      lable: ["Sale2: % from Investment amount", "Revenue"],
      value: [salePercent[1].salePercent, salePercent[1].revenue],
    },
    {
      lable: ["Sale3: % from Investment amount", "Revenue"],
      value: [salePercent[2].salePercent, salePercent[2].revenue],
    },
    {
      lable: ["Sale4: % from Investment amount", "Revenue"],
      value: [salePercent[3].salePercent, salePercent[3].revenue],
    },
    {
      lable: [
        "Stop sell MC(token will migrate to the Radium, manual sale",
        "Loss limit MC(sell all)",
      ],
      value: [ManualValue[0], ManualValue[1]],
    },
  ];
  const handleUpdate = () => {
    console.log(salePercent);
  };
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-row items-center justify-between p-[24px] border-b-[1px] border-bg_gray_light h-[88px]">
        <div className="flex flex-col items-start">
          <p className="text-lg">Sell</p>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex items-center justify-center rounded-md bg-bg_gray_light shadow-[inset_0_-3px_5px_1px_#F6F7FA33] p-2 h-[46px] w-[120px] hover:cursor-pointer hover:bg-primary_dark_700 transition duration-300 ease-in-out">
            Cancel
          </div>
          <div
            className="flex items-center justify-center rounded-md bg-primary_dark_700 shadow-[inset_0_-3px_5px_1px_#F6F7FA33] p-2 h-[46px] w-[120px] hover:cursor-pointer hover:bg-primary_dark_800 transition duration-300 ease-in-out"
            onClick={handleUpdate}
          >
            Update
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[24px] p-[24px]">
        <div className="flex flex-col gap-4 justify-between items-center">
          {SellSettingData.map((item, idx) => (
            <div
              className="flex flex-col gap-4 justify-between w-full"
              key={idx}
            >
              <div className="flex flex-row justify-between w-full gap-4">
                <div className="flex flex-col items-start w-[50%] flex-1 relative">
                  <p className="text-xs text-secondary_light_300">
                    {item.lable[0]}
                  </p>
                  <input
                    type="number"
                    value={item.value[0]}
                    onChange={(e) => {
                      if (idx < 4) {
                        const newSalePercent = [...salePercent];
                        newSalePercent[idx] = {
                          ...newSalePercent[idx],
                          salePercent: Number(e.target.value),
                        };
                        setSalePercent(newSalePercent);
                      } else {
                        const newManualValue = [...ManualValue];
                        newManualValue[0] = Number(e.target.value);
                        setManualValue(newManualValue);
                      }
                    }}
                    className="account-input-style !pl-8"
                  />
                  <span className="absolute left-4 top-4 translate-y-1/2 text-secondary_light_100">
                    %
                  </span>
                  <div className="absolute right-3 top-6 translate-y-1/2 hover:cursor-pointer">
                    <CloseIcon4SellInput />
                  </div>
                </div>
                <div className="flex flex-col items-start w-[50%] flex-1 relative">
                  <p className="text-xs text-secondary_light_300">
                    {item.lable[1]}
                  </p>
                  <input
                    type="number"
                    value={item.value[1]}
                    onChange={(e) => {
                      if (idx < 4) {
                        const newSalePercent = [...salePercent];
                        newSalePercent[idx] = {
                          ...newSalePercent[idx],
                          revenue: Number(e.target.value),
                        };
                        setSalePercent(newSalePercent);
                      } else {
                        const newManualValue = [...ManualValue];
                        newManualValue[1] = Number(e.target.value);
                        setManualValue(newManualValue);
                      }
                    }}
                    className={`account-input-style !pl-8 ${
                      idx !== 4 ? "!pr-6" : ""
                    }`}
                  />
                  <span className="absolute left-4 top-4 translate-y-1/2 text-secondary_light_100">
                    x
                  </span>
                  {idx === 4 && (
                    <div className="absolute right-3 top-6 translate-y-1/2 hover:cursor-pointer">
                      <CloseIcon4SellInput />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
