import { useState } from "react";
import { CloseIcon4SellInput } from "../../assets";

interface TimeRange {
  from: string;
  to: string;
}
export const BuySettingContent = () => {
  const [workingHours, setWorkingHours] = useState<TimeRange>({
    from: "05:00",
    to: "21:30",
  });
  const RadioGroup = [
    { label: "Unique ticker", value: false },
    { label: "XScore > 30", value: false },
    { label: "NoMint", value: true },
    { label: "Blacklist", value: false },
    { label: "Burnt", value: false },
  ];
  const [radioStates, setRadioStates] = useState(
    RadioGroup.map((item) => item.value)
  );

  const RadioGroup2 = [
    {
      label: "Top10",
      inputLabel: "have max",
      inputValue: 25,
      value: false,
    },
    {
      label: "Insiders",
      inputLabel: "have max tokens of cS",
      inputValue: 35,
      value: false,
    },
    {
      label: "Holders",
      inputLabel: "Max number of holders",
      inputValue: 24,
      value: false,
    },
  ];
  const [radioStates2, setRadioStates2] = useState(
    RadioGroup2.map((item) => item.value)
  );
  const [inputValues, setInputValues] = useState(
    RadioGroup2.map((item) => item.inputValue)
  );

  const inputGroups = [
    {
      row: [
        { label: "MCminlimit,$", value: workingHours.from },
        { label: "MCminlimit,$", value: workingHours.to },
      ],
    },
    {
      row: [
        { label: "Slippage, %", value: workingHours.from },
        { label: "MaxGAZprise", value: workingHours.to },
      ],
    },
    {
      row: [{ label: "Investment per token", value: workingHours.from }],
    },
  ];

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="flex flex-row items-center justify-between p-[24px] border-b-[1px] border-bg_gray_light h-[88px] top-0">
          <div className="flex flex-col items-start">
            <p className="text-lg">Buy</p>
          </div>
          <div className="flex flex-row gap-2 ">
            <div className="flex items-center justify-center rounded-md bg-bg_gray_light shadow-[inset_0_-3px_5px_1px_#F6F7FA33] p-2 h-[46px] w-[120px] hover:cursor-pointer hover:bg-primary_dark_700 transition duration-300 ease-in-out">
              Cancel
            </div>
            <div className="flex items-center justify-center rounded-md bg-primary_dark_700 shadow-[inset_0_-3px_5px_1px_#F6F7FA33] p-2 h-[46px] w-[120px] hover:cursor-pointer hover:bg-primary_dark_800 transition duration-300 ease-in-out">
              Update
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[24px] p-[24px] overflow-y-auto h-[calc(100%-88px)]">
          {inputGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="flex flex-row justify-between items-center"
            >
              <div className="flex gap-4">
                {group.row.map((input, inputIndex) => (
                  <div key={inputIndex} className="flex flex-col items-start">
                    <p className="text-xs text-secondary_light_300">
                      {input.label}
                    </p>
                    <input
                      type="time"
                      value={input.value}
                      onChange={(e) =>
                        setWorkingHours({
                          ...workingHours,
                          [inputIndex === 0 ? "from" : "to"]: e.target.value,
                        })
                      }
                      className="account-input-style text-xs text-start !px-4 py-2 !w-[261px] h-[46px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-4">
            {RadioGroup.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between w-[300px]"
              >
                <span className="text-white">{item.label}</span>
                <div className="flex flex-row justify-between items-center w-[100px]">
                  <button
                    onClick={() => {
                      const newStates = [...radioStates];
                      newStates[index] = !newStates[index];
                      setRadioStates(newStates);
                    }}
                    className={`relative w-12 h-[30px] rounded-full transition-colors duration-300 focus:outline-none
            ${
              radioStates[index] ? "bg-primary_light_400" : "bg-bg_gray_light"
            }`}
                  >
                    <div
                      className={`absolute w-[24px] h-[24px] bg-white rounded-full transition-transform duration-300 transform
              ${
                radioStates[index] ? "translate-x-0" : "-translate-x-4"
              } top-[2px]`}
                    />
                  </button>
                  <p className="text-base text-white">
                    {radioStates[index] ? "ON" : "OFF"}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {RadioGroup2.map((item, index) => (
              <div
                key={index}
                className="flex flex-row justify-between items-end w-[450px]"
              >
                <p className="text-white">{item.label}</p>
                <div className="flex flex-row gap-4 justify-between items-end w-[250px]">
                  <div className="flex flex-col items-start relative w-[140px]">
                    <p className="text-xs text-white">{item.inputLabel}</p>
                    <input
                      type="number"
                      value={inputValues[index]}
                      onChange={(e) => {
                        const newInputValues = [...inputValues];
                        newInputValues[index] = Number(e.target.value);
                        setInputValues(newInputValues);
                      }}
                      className="account-input-style !pl-8 text-xs text-white"
                    />
                    <span className="absolute left-4 top-4 translate-y-1/2 text-secondary_light_100">
                      %
                    </span>
                    <div className="absolute right-3 top-6 translate-y-1/2 hover:cursor-pointer">
                      <CloseIcon4SellInput />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-[100px] gap-2">
                    <button
                      onClick={() => {
                        const newStates = [...radioStates2];
                        newStates[index] = !newStates[index];
                        setRadioStates2(newStates);
                      }}
                      className={`relative w-12 h-[30px] rounded-full transition-colors duration-300 focus:outline-none
              ${
                radioStates2[index]
                  ? "bg-primary_light_400"
                  : "bg-bg_gray_light"
              }`}
                    >
                      <div
                        className={`absolute w-[24px] h-[24px] bg-white rounded-full transition-transform duration-300 transform
                ${
                  radioStates2[index] ? "translate-x-0" : "-translate-x-4"
                } top-[1px]`}
                      />
                    </button>
                    <p className="text-base text-white">
                      {radioStates2[index] ? "ON" : "OFF"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
