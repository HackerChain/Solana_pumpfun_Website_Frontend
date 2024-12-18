import { CustomTogglebtn } from "../CustomTogglebtn";
import { CustomInput } from "./CustomInput";

export const DegenAuditBox = () => {
  return (
    <>
      <div className="space-y-8">
        <h2 className="text-4xl font-medium text-start">Degen Audit</h2>
        <div className="grid grid-cols-1 space-y-8">
          <div className="flex items-center gap-2 relative">
            <CustomTogglebtn label="Unique ticker" />
          </div>
          <div className="flex items-center gap-2 relative">
            <CustomTogglebtn label="XScore > 30" />
          </div>
          <div className="flex items-center gap-2 relative">
            <CustomTogglebtn label="NoMint" />
          </div>
          <div className="flex items-center gap-2 relative">
            <CustomTogglebtn label="Blacklist" />
          </div>
          <div className="flex items-center gap-2 relative">
            <CustomTogglebtn label="Burnt" />
          </div>
          <div className="flex items-center gap-2 relative">
            <CustomTogglebtn label="Top10" />
            <CustomInput label="have max" value={30} unit="%" />
          </div>
          <div className="flex items-center gap-2 relative">
            <CustomTogglebtn label="Insiders" />
            <CustomInput label="have max tokens of cS" value={0.5} unit="%" />
          </div>
          <div className="flex items-center gap-2 relative">
            <CustomTogglebtn label="Holders" />
            <CustomInput label="Max number of holders" value={200} unit="%" />
          </div>
        </div>
      </div>
    </>
  );
};
