import React from "react";
import { formatNumber } from "../../utils/utils";
import { Logo1, Logo2, Logo3 } from "../../store/TestData/testData";
import { LinkIcon } from "../../assets";
import { useNavigate } from "react-router-dom";
import { getDevColor } from "../Dashboard/TokenTable";

interface TokenTableProps {
  tokens: AssetsToken[];
}

const images = [<Logo1 />, <Logo2 />, <Logo3 />];

// const getStateColor = (state: string) => {
//   if (state === "Sell") {
//     return "bg-color_green";
//   }
//   if (state === "Buy") {
//     return "bg-color_red";
//   }
//   if (state === "Raydium") {
//     return "bg-color_yellow_dark";
//   }
//   return "";
// };

const getAgeColor = (age: string) => {
  if (age.slice(-1) === "h" || age.slice(-1) === "m") {
    return "text-color_green";
  }
  return "";
};

const getPnLColor = (value: number) => {
  if (value > 0) return "text-color_green";
  if (value < 0) return "text-color_red";
  return "";
};

export const AssetsTable: React.FC<TokenTableProps> = ({ tokens }) => {
  const navigate = useNavigate();
  const handleClick = ({ ca }: { ca: string }) => {
    navigate(`/assets/${ca}`);
  };
  return (
    <div className="w-full h-full px-[30px] shadow-md overflow-x-auto overflow-y-auto flex flex-1 flex-col min-h-[300px]">
      <table className="w-full border-collapse">
        <thead className="sticky top-0 z-20 ">
          <tr className="h-[40px] text-center items-center text-xs xl:text-sm 2xl:text-base text-text_dark ">
            <th className="px-2 bg-secondary_dark_600 rounded-l-md">
              <div className="table-header-style">Token</div>
            </th>
            <th className="bg-secondary_dark_600">
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
              <div className="table-header-style">
                <p className=" line-clamp-1">Avg. Invest Price</p>
              </div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style">
                <p className="line-clamp-1">Total Invested</p>
              </div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style line-clamp-1">
                <p className="line-clamp-1">Current PnL</p>
              </div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style ">Holdings</div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style ">
                <p className="line-clamp-1">Selling step</p>
              </div>
            </th>
            <th className="bg-secondary_dark_600 rounded-r-md">
              <div className="table-header-style max-w-48">Side</div>
            </th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto h-full">
          {tokens.map((token, index) => (
            <tr
              key={index}
              className="items-center h-[40px] xl:h-[50px] 2xl:h-[60px] text-xs xl:text-sm 2xl:text-base px-2"
            >
              <td className="table-data-style w-[180px] xl:w-[220px] 2xl:w-[260px] px-2">
                <div
                  className="flex flex-row justify-between items-center pr-2 xl:pr-4 hover:text-white"
                  onClick={() =>
                    handleClick({ ca: token.contractAddress || "" })
                  }
                >
                  <div className="flex flex-row items-center gap-2">
                    <div className="w-[22px] h-[22px] xl:w-[26px] xl:h-[26px] 2xl:w-[32px] 2xl:h-[32px] flex items-center">
                      {images[index % 3]}
                    </div>

                    <div className="flex flex-col justify-start">
                      <p className="font-medium line-clamp-1">{token.name}</p>

                      <p className="text-text_dark text-start text-xxs xl:text-xs">
                        Text1
                      </p>
                    </div>
                  </div>
                  <LinkIcon />
                </div>
              </td>
              <td
                className={`table-data-style  ${getAgeColor(
                  token.Age || ""
                )} w-[50px] xl:w-[70px] 2xl:w-[90px]`}
              >
                {token.Age}
              </td>
              <td className="table-data-style  w-[120px] xl:w-[140px] 2xl:w-[160px]">
                ${formatNumber(token.currentPrice || 0)}
              </td>
              <td className="table-data-style w-[80px] xl:w-[100px] 2xl:w-[120px]">
                ${formatNumber(token.MarketCap || 0)}
              </td>
              <td className="table-data-style w-[80px] xl:w-[100px] 2xl:w-[120px]">
                ${formatNumber(token.FDV || 0)}
              </td>
              <td className="table-data-style w-[130px] xl:w-[150px] 2xl:w-[170px]">
                ${formatNumber(token.avgInvestPrice || 0)}
              </td>
              <td className="table-data-style w-[80px] xl:w-[100px] 2xl:w-[120px]">
                ${formatNumber(token.totalInvested || 0)}
              </td>
              <td className="table-data-style flex-col w-[80px] xl:w-[100px] 2xl:w-[120px]">
                <p
                  className={`text-xs xl:text-sm ${getPnLColor(
                    token.currentPnL?.size || 0
                  )}`}
                >
                  {token.currentPnL?.size && token.currentPnL?.size > 0
                    ? "+ "
                    : "- "}
                  ${formatNumber(Math.abs(token.currentPnL?.size || 0))}
                </p>
                <p
                  className={`text-xxs xl:text-xs ${getPnLColor(
                    token.currentPnL?.size || 0
                  )}`}
                >
                  {token.currentPnL?.size && token.currentPnL?.size > 0
                    ? "+ "
                    : "- "}
                  {formatNumber(Math.abs(token.currentPnL?.size || 0))}%
                </p>
              </td>
              <td className="table-data-style flex-col w-[140px]">
                <div className="flex flex-row gap-2">
                  <input type="checkbox" />
                  <div>
                    <p className="text-xs xl:text-sm">
                      ${formatNumber(token.Holdings?.size || 0)}
                    </p>
                    <p className="text-xxs xl:text-xs">
                      {formatNumber(token.Holdings?.percent || 0)} MEM
                    </p>
                  </div>
                </div>
              </td>
              <td className="table-data-style w-[80px] xl:w-[100px] 2xl:w-[120px]">
                {formatNumber(token.sellingStep || 0)}
              </td>
              <td className="table-data-style w-[120px]">
                <p
                  className={`w-fit rounded-full px-3 text-white ${getDevColor(
                    token.state || ""
                  )}`}
                >
                  {token.state}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
