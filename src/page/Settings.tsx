import { SettingsIcon } from "../assets";
import { TitleBox } from "../components/TitleBox";

export const Settings = () => {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto h-full bg-bg_gray">
      <TitleBox title="Settings" icon={<SettingsIcon />} />
    </div>
  );
};
