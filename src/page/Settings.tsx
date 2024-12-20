import { useState } from "react";
import { SettingsIcon } from "../assets";
import { TitleBox } from "../components/TitleBox";
import { MainSettingContent } from "../components/Settings/MainSettingContent";
import { BuySettingContent } from "../components/Settings/BuySettingContent";

export const Settings = () => {
  const menu = [
    {
      title: "Main",
      link: "/settings/main",
      item: <MainSettingContent />,
    },
    {
      title: "Buy",
      link: "/settings/buy",
      item: <BuySettingContent />,
    },
    {
      title: "Sell",
      link: "/settings/sell",
      item: <div>Sell</div>,
    },
    {
      title: "Degen Audit",
      link: "/settings/audit",
      item: <div>Degen Audit</div>,
    },
  ];
  const [selected, setSelected] = useState(menu[0].title);
  const handleClick = (idx: number) => {
    setSelected(menu[idx].title);
  };
  return (
    <div className="flex flex-col flex-1 overflow-y-auto h-full bg-bg_gray ">
      <TitleBox title="Settings" icon={<SettingsIcon />} />
      <div className="flex-1 w-full h-full p-[30px] ">
        <div className="rounded-2xl h-full border-[1px] border-bg_gray_light flex flex-row">
          <div className="flex flex-col w-[300px] border-r-[1px] border-bg_gray_light p-[24px] items-start">
            <p className="text-secondary_light_400 mb-2">SETTINGS MENU</p>
            {menu.map((item, idx) => (
              <div
                key={idx}
                className={`flex w-full h-[38px] rounded-md items-center p-2 ${
                  selected === item.title
                    ? "bg-bg_gray_ligh shadow-[inset_0_-5px_20px_10px_#2C2C30]"
                    : "hover:shadow-[inset_0_-3px_8px_2px_#2C2C30]"
                }`}
                onClick={() => handleClick(idx)}
              >
                {item.title}
              </div>
            ))}
          </div>
          {menu[menu.findIndex((item) => item.title === selected)].item}
        </div>
      </div>
    </div>
  );
};
