import { ImgLink } from "../../assets";
import { Logo1 } from "../../store/TestData/testData";
import { formatAddress } from "../../utils/utils";
import { Metric } from "../AssetsPage/Metric";

export const TokenInfo = ({ ca }: { ca: string | undefined }) => {
  return (
    <>
      <div className="py-2 px-4 min-w-[500px] flex flex-col items-center justify-between gap-12">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center justify-start gap-4">
            <div className="flex flex-row gap-2 items-center justify-center">
              <Logo1 />
              <div className="flex flex-col justify-start">
                <p className="text-[#E7E0EC] font-medium text-lg">
                  Token name 9 (MEM)
                </p>
                <div className="flex flex-row gap-2 items-center justify-start">
                  <p className="text-sm text-text_dark">
                    {formatAddress(ca || "")}
                  </p>
                  <ImgLink />
                </div>
              </div>
            </div>
          </div>
          <div className="gap-4 w-[242px] flex flex-row items-center justify-start">
            <p className="text-sm text-color_green bg-green-800/20 px-2 rounded-md">
              11.54%
            </p>
            <p className="text-sm text-color_green">PnL $5,644.72</p>
          </div>
        </div>
        <div className="flex flex-row gap-32 items-center justify-start w-full">
          <Metric label="Realised Profit" value={2651.04} />
          <Metric label="Unrealized Profit" value={2315.23} />
          <Metric label="Fee paid" value={`${2.5} SOL`} />
        </div>
      </div>
    </>
  );
};
