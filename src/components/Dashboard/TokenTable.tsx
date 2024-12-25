import React from "react";
import {
  copyToClipboard,
  formatNumber,
  getPumpfunUrlForToken,
  getTimeDelta,
} from "../../utils/utils";
import { DownSortIcon, LinkIcon, UpSortIcon } from "../../assets";
import CustomGaugeMeter from "./GaugeMeter";
import { Token } from "../../types/dashboard/token";
import { SortConfig, SortField } from "../../types";
interface TokenTableProps {
  tokens: Token[];
  sortConfig: SortConfig;
  handleSort: (field: SortField) => void;
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

export const TokenTable: React.FC<TokenTableProps> = ({
  tokens,
  sortConfig,
  handleSort,
}) => {
  return (
    <div className="w-full h-full px-[30px] shadow-md overflow-x-auto min-w-[1000px] overflow-y-auto flex flex-1 flex-col relative">
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
            <th
              className="bg-secondary_dark_600"
              onClick={() => handleSort("age" as SortField)}
            >
              <div className="table-header-style gap-2">
                Age{" "}
                {sortConfig.field === "age" && sortConfig.order === "desc" ? (
                  <UpSortIcon />
                ) : (
                  <DownSortIcon />
                )}
              </div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style">Price, $</div>
            </th>
            {/* market cap */}
            <th
              className="bg-secondary_dark_600"
              onClick={() => handleSort("market_cap" as SortField)}
            >
              <div className="table-header-style gap-2">
                MC, ${" "}
                {sortConfig.field === "market_cap" &&
                sortConfig.order === "desc" ? (
                  <UpSortIcon />
                ) : (
                  <DownSortIcon />
                )}
              </div>
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
        {tokens.map((token, index) => (
          <tr
            key={index}
            className="items-center h-[40px] xl:h-[50px] 2xl:h-[60px] text-xs xl:text-sm 2xl:text-base px-2 border-b-[1px] border-bg_gray_light hover:bg-gray-900 transition duration-100 ease-in-out"
          >
            <td className="table-data-style min-w-[180px] xl:w-[240px] px-2">
              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row items-center gap-2">
                  <input type="checkbox" />

                  <div className="aspect-square w-[22px] h-[22px] xl:w-[26px] xl:h-[26px] 2xl:w-[32px] 2xl:h-[32px] flex items-center">
                    {token.image_url && (
                      <img
                        src={token.image_url}
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

            {/* dev state */}
            <td className="table-data-style w-[85px] xl:w-[110px]">
              <div className="flex items-center justify-start w-[80px]">
                <p
                  className={`w-fit rounded-full px-3 text-white ${getDevColor(
                    token.dev_state ?? ""
                  )}`}
                >
                  {token.dev_state}
                </p>
              </div>
            </td>
            {/* age */}
            <td
              className={`table-data-style ${getAgeColor(
                getTimeDelta(token.created_timestamp)
              )} w-[60px] xl:w-[80px]`}
            >
              {getTimeDelta(token.created_timestamp)}
            </td>
            {/* price */}
            <td className="table-data-style w-[120px] xl:w-[140px]">
              ${formatNumber(token.price)}
            </td>
            {/* market cap */}
            <td className="table-data-style w-[90px] xl:w-[110px]">
              ${formatNumber(token.usd_market_cap)}
            </td>
            {/* fdv */}
            <td className="table-data-style w-[90px] xl:w-[110px]">
              ${formatNumber(token.fdv ?? 1234)}
            </td>

            {/* initial supply tokens */}
            <td className="table-data-style flex-col w-[140px] xl:w-[160px]">
              <p>{formatNumber(token.total_supply)}</p>
              <p>({formatNumber(12)}%)</p>
            </td>

            {/* circul supply */}
            <td className="table-data-style flex-col w-[100px] xl:w-[120px]">
              <p>{formatNumber(token.circul_supply)}</p>
              <p>({formatNumber(32)}%)</p>
            </td>

            {/* total supply tokens */}
            <td className="table-data-style w-[100px]">
              {formatNumber(token.total_supply)}
            </td>

            {/* 1h txs */}
            <td className="table-data-style w-[100px] xl:w-[120px]">
              {formatNumber(123546789)}
            </td>
            {/* 1d vol */}
            <td className="table-data-style w-[100px] xl:w-[120px]">
              ${formatNumber(987654)}
            </td>
            {/* degen audit */}
            <td className="table-data-style flex-col w-[220px]">
              <div className="flex flex-row gap-2 justify-start w-full">
                {token.mint_auth !== undefined && (
                  <span
                    className={`py-0.5 text-xxs 2xl:text-xs ${
                      true ? "text-success_base" : "text-error_base"
                    }`}
                  >
                    ● NoMint
                  </span>
                )}

                {token.freeze_auth !== undefined && (
                  <span
                    className={`py-0.5 text-xxs 2xl:text-xs ${
                      true ? "text-success_base" : "text-error_base"
                    }`}
                  >
                    ● Blacklist
                  </span>
                )}
              </div>

              <div className="flex flex-row gap-2 justify-start w-full">
                {"token.Degen?.Insiders" !== undefined && (
                  <span
                    className={`py-0.5 text-xxs 2xl:text-xs line-clamp-1 ${
                      false ? "text-error_base" : "text-success_base"
                    }`}
                  >
                    ● Insiders: 3%
                  </span>
                )}

                {token.top10_percent !== undefined && (
                  <span
                    className={`py-0.5 text-xxs 2xl:text-xs line-clamp-1 ${
                      token.top10_percent > 30.0
                        ? "text-error_base"
                        : "text-success_base"
                    }`}
                  >
                    ● Top10: {formatNumber(token.top10_percent ?? 0)}%
                  </span>
                )}
              </div>
            </td>

            <td className="table-data-style pr-2">
              <CustomGaugeMeter value={970} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
