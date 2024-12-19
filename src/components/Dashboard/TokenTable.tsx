import React from "react";
import { Token } from "../../types/dashboard";
import { formatNumber } from "../../utils/utils";
import { Logo1, Logo2, Logo3 } from "../../store/TestData/testData";
import { LinkIcon } from "../../assets";
import CustomGaugeMeter from "../GaugeMeter";

interface TokenTableProps {
  tokens: Token[];
}

const images = [<Logo1 />, <Logo2 />, <Logo3 />];

const getDevColor = (dev: string) => {
  if (dev === "Buy" || dev === "HODL") {
    return "bg-success_dark_700 border-[1px]  border-success_default";
  }
  if (dev === "Sell" || dev === "Sell All") {
    return "bg-error_dark_700 border-[1px]  border-error_default";
  }
  return "";
};

const getAgeColor = (age: string) => {
  if (age.slice(-1) === "h" || age.slice(-1) === "m") {
    return "text-color_green";
  }
  return "";
};

export const TokenTable: React.FC<TokenTableProps> = ({ tokens }) => {
  return (
    <div className="w-full h-full px-[30px] shadow-md overflow-x-auto min-w-[1000px] overflow-y-auto flex flex-1 flex-col">
      <table className="w-full border-collapse">
        <thead className="sticky top-0 z-20 ">
          <tr className="h-[40px] text-center items-center text-xs xl:text-sm 2xl:text-base text-text_dark ">
            <th className="px-2 bg-secondary_dark_600 rounded-l-md">
              <div className="flex items-center justify-start gap-2">
                <input type="checkbox" /> Token
              </div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style">DEV</div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style">Age</div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style">Price, $</div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style">MC, $</div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style">FDV, $</div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style">iS, tokens</div>
            </th>

            <th className="bg-secondary_dark_600">
              <div className="table-header-style">cS, tokens</div>
            </th>

            <th className="bg-secondary_dark_600">
              <div className="table-header-style">tS, tokens</div>
            </th>

            <th className="bg-secondary_dark_600">
              <div className="table-header-style">1h TXs</div>
            </th>

            <th className="bg-secondary_dark_600">
              <div className="table-header-style">1h Vol</div>
            </th>

            <th className="bg-secondary_dark_600">
              <div className="table-header-style">Degen Audit</div>
            </th>

            <th className="bg-secondary_dark_600 rounded-r-md">
              <div className="table-header-style ">XScore</div>
            </th>
          </tr>
        </thead>

        <tbody className="overflow-y-auto h-full">
          {tokens.map((token, index) => (
            <tr
              key={index}
              className="items-center h-[40px] xl:h-[50px] 2xl:h-[60px] text-xs xl:text-sm 2xl:text-base px-2"
            >
              <td className="table-data-style w-[180px] px-2">
                <div className="flex flex-row justify-between items-center ">
                  <div className="flex flex-row items-center gap-2">
                    <input type="checkbox" />

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

              <td className="table-data-style w-[80px]">
                <p
                  className={`w-fit rounded-full px-3 text-white ${getDevColor(
                    token.DEV
                  )}`}
                >
                  {token.DEV}
                </p>
              </td>

              <td
                className={`table-data-style ${getAgeColor(
                  token.Age
                )} w-[60px]`}
              >
                {token.Age}
              </td>

              <td className="table-data-style w-[90px]">
                ${formatNumber(token.Price)}
              </td>

              <td className="table-data-style w-[70px]">
                ${formatNumber(token.MarketCap)}
              </td>

              <td className="table-data-style w-[70px]">
                ${formatNumber(token.FDV)}
              </td>

              <td className="table-data-style flex-col w-[100px]">
                <p>${formatNumber(token.ISToken.size)}</p>
                <p>({formatNumber(token.ISToken.percent)}%)</p>
              </td>

              <td className="table-data-style flex-col w-[100px]">
                <p>${formatNumber(token.CSToken.size)}</p>
                <p>({formatNumber(token.CSToken.percent)}%)</p>
              </td>

              <td className="table-data-style w-[100px]">
                ${formatNumber(token.TSToken)}
              </td>

              <td className="table-data-style w-[90px]">
                {formatNumber(token.TXsPerHr)}
              </td>

              <td className="table-data-style w-[80px]">
                ${formatNumber(token.VolPerHr)}
              </td>

              <td className="table-data-style w-[160px] flex-col">
                <div className="flex flex-row gap-2 justify-start">
                  {token.Degen?.NoMint !== undefined && (
                    <span
                      className={`py-0.5 text-xxs 2xl:text-xs ${
                        token.Degen.NoMint
                          ? "text-success_base"
                          : "text-error_base"
                      }`}
                    >
                      ● NoMint
                    </span>
                  )}

                  {token.Degen?.Blacklist !== undefined && (
                    <span
                      className={`py-0.5 text-xxs 2xl:text-xs ${
                        token.Degen.Blacklist
                          ? "text-success_base"
                          : "text-error_base"
                      }`}
                    >
                      ● Blacklist
                    </span>
                  )}
                </div>

                <div className="flex flex-row gap-2 justify-start">
                  {token.Degen?.Insiders !== undefined && (
                    <span
                      className={`py-0.5 text-xxs 2xl:text-xs line-clamp-1 ${
                        token.Degen.Insiders > 2
                          ? "text-error_base"
                          : "text-success_base"
                      }`}
                    >
                      ● Insiders: {token.Degen.Insiders}%
                    </span>
                  )}

                  {token.Degen?.Top10 !== undefined && (
                    <span
                      className={`py-0.5 text-xxs 2xl:text-xs line-clamp-1 ${
                        token.Degen.Top10 > 30
                          ? "text-error_base"
                          : "text-success_base"
                      }`}
                    >
                      ● Top10: {token.Degen.Top10}%
                    </span>
                  )}
                </div>
              </td>

              <td className="table-data-style w-[100px] pr-2">
                <CustomGaugeMeter value={970} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
