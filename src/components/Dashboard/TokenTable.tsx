import React from "react";
import {
  copyToClipboard,
  formatNumber,
  getPumpfunUrlForToken,
  getTimeDelta,
} from "../../utils/utils";
import { LinkIcon } from "../../assets";
import CustomGaugeMeter from "./GaugeMeter";
import { Token } from "../../types/dashboard/token";

interface TokenTableProps {
  tokens: Token[];
}
export const getDevColor = (dev: string) => {
  if (dev === "Buy" || dev === "HODL") {
    return "bg-success_dark_700 border-[1px]  border-success_default";
  }
  if (dev === "Sell" || dev === "Sell All") {
    return "bg-error_dark_700 border-[1px]  border-error_default";
  }
  if (dev === "Raydium") {
    return "bg-[#A96E18] border-[1px]  border-[#ECAC31]";
  }
  return "";
};

const getAgeColor = (age: string) => {
  if (age.slice(-1) === "m") {
    return "text-color_green";
  }
  return "";
};

export const TokenTable: React.FC<TokenTableProps> = ({ tokens }) => {
  // const { loading } = useSelector((state: RootState) => state.token);
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
        {
          <tbody className="overflow-y-auto h-full">
            {tokens.map((token, index) => (
              <tr
                key={index}
                className="items-center h-[40px] xl:h-[50px] 2xl:h-[60px] text-xs xl:text-sm 2xl:text-base px-2 border-b-[1px] border-bg_gray_light hover:bg-gray-900 transition duration-100 ease-in-out"
              >
                <td className="table-data-style w-[200px] px-2">
                  <div className="flex flex-row justify-between items-center ">
                    <div className="flex flex-row items-center gap-2">
                      <input type="checkbox" />

                      <div className="aspect-square w-[22px] h-[22px] xl:w-[26px] xl:h-[26px] 2xl:w-[32px] 2xl:h-[32px] flex items-center">
                        {token.image_uri && (
                          <img
                            src={token.image_uri}
                            alt={token.name}
                            className=" object-cover rounded-full w-[22px] h-[22px] xl:w-[26px] xl:h-[26px] 2xl:w-[32px] 2xl:h-[32px] flex items-center"
                          />
                        )}
                      </div>

                      <div className="flex flex-col justify-start">
                        <p className="font-medium line-clamp-1">{token.name}</p>

                        <p className="text-start text-xxs xl:text-xs">
                          {token.symbol}
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex items-center justify-end w-[32px]"
                      onClick={() => {
                        copyToClipboard(getPumpfunUrlForToken(token.mint));
                      }}
                    >
                      <LinkIcon />
                    </div>
                  </div>
                </td>

                <td className="table-data-style w-[80px]">
                  <p
                    className={`w-fit rounded-full px-3 text-white ${getDevColor(
                      "Buy"
                    )}`}
                  >
                    Buy
                  </p>
                </td>

                <td
                  className={`table-data-style ${getAgeColor(
                    getTimeDelta(token.created_timestamp)
                  )} w-[60px]`}
                >
                  {getTimeDelta(token.created_timestamp)}
                </td>

                <td className="table-data-style w-[90px]">
                  ${formatNumber(0.0056)}
                </td>

                <td className="table-data-style w-[70px]">
                  ${formatNumber(token.usd_market_cap)}
                </td>

                <td className="table-data-style w-[70px]">
                  ${formatNumber(12345)}
                </td>

                <td className="table-data-style flex-col w-[100px]">
                  <p>${formatNumber(12345)}</p>
                  <p>({formatNumber(12)}%)</p>
                </td>

                <td className="table-data-style flex-col w-[100px]">
                  <p>${formatNumber(12345)}</p>
                  <p>({formatNumber(32)}%)</p>
                </td>

                <td className="table-data-style w-[100px]">
                  ${formatNumber(12345)}
                </td>

                <td className="table-data-style w-[90px]">
                  {formatNumber(123546789)}
                </td>

                <td className="table-data-style w-[80px]">
                  ${formatNumber(987654)}
                </td>

                <td className="table-data-style w-[160px] flex-col">
                  <div className="flex flex-row gap-2 justify-start">
                    {"token.Degen?.NoMint" !== undefined && (
                      <span
                        className={`py-0.5 text-xxs 2xl:text-xs ${
                          true ? "text-success_base" : "text-error_base"
                        }`}
                      >
                        ● NoMint
                      </span>
                    )}

                    {"token.Degen?.Blacklist" !== undefined && (
                      <span
                        className={`py-0.5 text-xxs 2xl:text-xs ${
                          true ? "text-success_base" : "text-error_base"
                        }`}
                      >
                        ● Blacklist
                      </span>
                    )}
                  </div>

                  <div className="flex flex-row gap-2 justify-start">
                    {"token.Degen?.Insiders" !== undefined && (
                      <span
                        className={`py-0.5 text-xxs 2xl:text-xs line-clamp-1 ${
                          false ? "text-error_base" : "text-success_base"
                        }`}
                      >
                        ● Insiders: 3%
                      </span>
                    )}

                    {"token.Degen?.Top10" !== undefined && (
                      <span
                        className={`py-0.5 text-xxs 2xl:text-xs line-clamp-1 ${
                          true ? "text-error_base" : "text-success_base"
                        }`}
                      >
                        ● Top10: 15%
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
        }
      </table>
    </div>
  );
};
