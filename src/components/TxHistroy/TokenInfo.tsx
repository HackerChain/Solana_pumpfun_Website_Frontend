import { ArrowUpIcon, LinkIcon } from "../../assets";
import { Logo1 } from "../../store/TestData/testData";
import { TokenTxs } from "../../types/assetsTx";
import { formatAddress, formatNumber } from "../../utils/utils";

interface TokenTxsProps {
  data: TokenTxs[];
}

export const TokenInfo: React.FC<TokenTxsProps> = ({ data }) => {
  return (
    <>
      <div className="flex flex-col justify-between items-center gap-5 px-[30px] my-[24px]">
        <div className="flex flex-row justify-between w-full rounded-md border-[1px] border-bg_gray_light gap-1 pl-4 py-4 items-start">
          <div className="flex flex-row items-center gap-2">
            <div className="w-[22px] h-[22px] xl:w-[26px] xl:h-[26px] 2xl:w-[32px] 2xl:h-[32px] flex items-center">
              <Logo1 />
            </div>

            <div className="flex flex-col items-start justify-start">
              <p className="font-medium line-clamp-1">
                {data[0].name} (${data[0].symbol})
              </p>

              <div className="flex flex-row gap-2">
                <p className="text-text_dark text-start text-xxs lg:text-xs">
                  {formatAddress(data[0].contractAddress)}
                </p>
                <LinkIcon />
                <div className="flex flex-row  items-center justify-center">
                  <div className="-translate-y-[1px] -translate-x-1">
                    <ArrowUpIcon />
                  </div>
                  <p className={`text-xxs lg:text-xs text-success_base`}>
                    11.54%
                  </p>
                </div>
                <p className="text-xxs lg:text-xs text-success_base line-clamp-1">
                  $5,644.72
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col items-center justify-center px-10 ">
              <p className="text-text_dark text-start text-xxs lg:text-xs">
                Realised Profit
              </p>
              <p className="text-start text-lg_2 lg:text-xl">
                ${data[0].profit.realised}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center px-8 xl:px-12 border-x-[1px] border-bg_gray_light">
              <p className="text-text_dark text-start text-xxs lg:text-xs">
                Unrealised Profit
              </p>
              <p className="text-start text-lg_2 lg:text-xl">
                ${data[0].profit.unRealised}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center px-10 ">
              <p className="text-text_dark text-start text-xxs lg:text-xs">
                Fee paid
              </p>
              <p className="text-start text-lg_2 lg:text-xl">
                {data[0].feePaid} SOL
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 z-20 ">
              <tr className="h-[32px] text-center items-center text-xs xl:text-sm 2xl:text-base text-text_dark ">
                <th className="px-2 bg-secondary_dark_600 rounded-l-md">
                  <div className="table-header-style">Age</div>
                </th>
                <th className="bg-secondary_dark_600">
                  <div className="table-header-style">Current Price</div>
                </th>
                <th className="bg-secondary_dark_600">
                  <div className="table-header-style">MC, $</div>
                </th>
                <th className="bg-secondary_dark_600">
                  <div className="table-header-style">FDV, $</div>
                </th>
                <th className="bg-secondary_dark_600">
                  <div className="table-header-style">Avg. Invest Price</div>
                </th>
                <th className="bg-secondary_dark_600">
                  <div className="table-header-style">Total Invested</div>
                </th>
                <th className="bg-secondary_dark_600 rounded-r-md">
                  <div className="table-header-style ">Holdings</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="items-center h-[40px] text-xs xl:text-sm 2xl:text-base p-2">
                <td className={`table-data-style w-[60px]`}>{data[0].age}</td>
                <td className="table-data-style w-[90px]">
                  ${formatNumber(data[0].currentPrice)}
                </td>
                <td className="table-data-style w-[70px]">
                  ${formatNumber(data[0].marketCap)}
                </td>

                <td className="table-data-style w-[70px]">
                  ${formatNumber(data[0].FDV)}
                </td>

                <td className="table-data-style flex-col w-[100px]">
                  ${formatNumber(data[0].avgInvestPrice)}
                </td>

                <td className="table-data-style flex-col w-[100px]">
                  ${formatNumber(data[0].totalInvest)}
                </td>

                <td className="table-data-style w-[100px]">
                  <p>+{formatNumber(data[0].Holdings.size)}%</p>
                  <p className="text-xxs lg:text-xs">
                    {formatNumber(data[0].Holdings.percent)} {data[0].symbol}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
