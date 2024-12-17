import React from "react";
import { formatAddress, formatNumber } from "../../utils/utils";
import { Logo1, Logo2, Logo3 } from "../../store/TestData/testData";
import { FilledStar, ImgLink } from "../../assets";

interface TokenTableProps {
  tokens: AssetsToken[];
}

const images = [<Logo1 />, <Logo2 />, <Logo3 />];

const getStateColor = (state: string) => {
  if (state === "Sell") {
    return "bg-color_green";
  }
  if (state === "Buy") {
    return "bg-color_red";
  }
  if (state === "Raydium") {
    return "bg-color_yellow_dark";
  }
  return "";
};

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
  return (
    <div className="w-full h-full min-h-[800px] shadow-md overflow-x-auto min-w-[1000px]">
      <table className="w-full border-collapse">
        <thead className="sticky top-0 bg-bg_gray/70 backdrop-blur-sm z-10">
          <tr className="h-[60px] text-center items-center text-sm text-text_dark">
            <th className="table-header-style">Token</th>
            <th className="table-header-style">Age</th>
            <th className="table-header-style">Current Price</th>
            <th className="table-header-style">MC, $</th>
            <th className="table-header-style">FDV, $</th>
            <th className="table-header-style">Avg. Invest Price</th>
            <th className="table-header-style">Total Invested</th>
            <th className="table-header-style hidden xl:table-cell">
              Current PnL
            </th>
            <th className="table-header-style hidden xl:table-cell">
              Holdings
            </th>
            <th className="table-header-style">Selling step</th>
            <th className="table-header-style max-w-48"></th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto h-full">
          {tokens.map((token, index) => (
            <tr
              key={index}
              className="border-b-[1px] border-bg_gray_light h-[88px] bg-bg_gray"
            >
              {/* TODO fix token name style for response */}
              <td className="py-2 px-4 min-w-[200px]">
                <div className="flex flex-row items-center justify-start gap-4">
                  <div className="flex flex-row gap-2 items-center justify-center">
                    <div className="hidden xl:block">{images[index % 3]}</div>
                    <div className="flex flex-col justify-start">
                      <p className="text-[#E7E0EC] font-medium text-lg">
                        {token.name}
                      </p>
                      <div className="flex flex-row gap-2 items-center justify-start">
                        <p className="text-sm text-text_dark">
                          {formatAddress(token.contractAddress || "")}
                        </p>
                        <ImgLink />
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td className={`py-2 px-4  ${getAgeColor(token.Age || "")}`}>
                {token.Age}
              </td>
              <td className="py-2 px-4">
                ${formatNumber(token.currentPrice || 0)}
              </td>
              <td className="py-2 px-4">
                ${formatNumber(token.MarketCap || 0)}
              </td>
              <td className="py-2 px-4">${formatNumber(token.FDV || 0)}</td>
              <td className="py-2 px-4">
                ${formatNumber(token.avgInvestPrice || 0)}
              </td>
              <td className="py-2 px-4">
                ${formatNumber(token.totalInvested || 0)}
              </td>
              <td className="py-2 px-4 hidden xl:table-cell">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <p className={`${getPnLColor(token.currentPnL?.size || 0)}`}>
                    ${formatNumber(token.currentPnL?.size || 0)}
                  </p>
                  <p
                    className={`text-sm ${getPnLColor(
                      token.currentPnL?.size || 0
                    )}`}
                  >
                    {formatNumber(token.currentPnL?.percent || 0)} %
                  </p>
                </div>
              </td>
              <td className="py-2 px-4 hidden xl:table-cell">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <p>{formatNumber(token.Holdings?.size || 0)}</p>
                  <p className="text-sm">
                    {formatNumber(token.Holdings?.percent || 0)} MEM
                  </p>
                </div>
              </td>
              <td className="py-2 px-4">
                {formatNumber(token.sellingStep || 0)}
              </td>
              <td className="py-2 px-4 w-20">
                <p
                  className={`w-full text-center text-sm rounded-md px-2 text-white ${getStateColor(
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
