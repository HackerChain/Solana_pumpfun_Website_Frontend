import React from "react";
import { Token } from "../../types/dashboard";
import { formatAddress, formatNumber } from "../../utils/utils";
import { Logo1, Logo2, Logo3 } from "../../store/testData";
import { FilledStar, ImgLink } from "../../assets";

interface TokenTableProps {
  tokens: Token[];
}

const images = [<Logo1 />, <Logo2 />, <Logo3 />];

const getDevColor = (dev: string) => {
  if (dev === "Buy" || dev === "HODL") {
    return "text-color_green";
  }
  if (dev === "Sell" || dev === "Sell All") {
    return "text-color_red";
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
    <div className="w-full h-full  shadow-md overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="sticky top-0 bg-bg_gray/70 backdrop-blur-sm z-10">
          <tr className="h-[60px] text-center items-center text-sm text-text_dark">
            <th className="py-3 text-center">Token</th>
            <th className="py-3 text-center">DEV</th>
            <th className="py-3 text-center">Age</th>
            <th className="py-3 text-center">Price, $</th>
            <th className="py-3 text-center">MC, $</th>
            <th className="py-3 text-center">FDV, $</th>
            <th className="py-3 text-center">iS, tokens</th>
            <th className="py-3 text-center">cS, tokens</th>
            <th className="py-3 text-center">tS, tokens</th>
            <th className="py-3 text-center">1h TXs</th>
            <th className="py-3 text-center">1h Vol</th>
            <th className="py-3 text-center">Degen Audit</th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto h-full">
          {tokens.map((token, index) => (
            <tr
              key={index}
              className="border-b-[1px] border-bg_gray_light h-[88px] bg-bg_gray"
            >
              {/* TODO fix token name style for response */}
              <td className="py-2 max-w-[180px]">
                <div className="flex flex-row items-center justify-start gap-4">
                  <FilledStar />
                  <div className="flex flex-row gap-2 items-center justify-center">
                    {images[index % 3]}
                    <div className="flex flex-col justify-start">
                      <p className="text-[#E7E0EC] font-medium text-lg">
                        {token.name}
                      </p>
                      <div className="flex flex-row gap-2 items-center justify-start">
                        <p className="text-sm text-text_dark">
                          {formatAddress(token.contractAddress)}
                        </p>
                        <ImgLink />
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td className={`py-2 px-4 ${getDevColor(token.DEV)}`}>
                {token.DEV}
              </td>
              <td className={`py-2 px-4 ${getAgeColor(token.Age)}`}>
                {token.Age}
              </td>
              <td className="py-2 px-4">${formatNumber(token.Price)}</td>
              <td className="py-2 px-4">${formatNumber(token.MarketCap)}</td>
              <td className="py-2 px-4">${formatNumber(token.FDV)}</td>
              <td className="py-2 px-4">${formatNumber(token.ISToken.size)}</td>
              <td className="py-2 px-4">${formatNumber(token.CSToken.size)}</td>
              <td className="py-2 px-4">${formatNumber(token.TSToken)}</td>
              <td className="py-2 px-4">{formatNumber(token.TXsPerHr)}</td>
              <td className="py-2 px-4">${formatNumber(token.VolPerHr)}</td>
              <td className="py-2 px-4  max-w-44">
                <div className="flex flex-wrap gap-1 justify-between">
                  {token.Degen?.NoMint !== undefined && (
                    <span
                      className={`px-2 py-0.5 text-xs ${
                        token.Degen.NoMint
                          ? "text-color_green"
                          : "text-color_red"
                      }`}
                    >
                      NoMint
                    </span>
                  )}
                  {token.Degen?.Blacklist !== undefined && (
                    <span
                      className={`px-2 py-0.5 text-xs ${
                        token.Degen.Blacklist
                          ? "text-color_green"
                          : "text-color_red"
                      }`}
                    >
                      Blacklist
                    </span>
                  )}
                  {token.Degen?.Burnt !== undefined && (
                    <span
                      className={`px-2 py-0.5 text-xs ${
                        token.Degen.Burnt
                          ? "text-color_green"
                          : "text-color_red"
                      }`}
                    >
                      Burnt
                    </span>
                  )}
                  {token.Degen?.Social !== undefined && (
                    <span
                      className={`px-2 py-0.5 text-xs ${
                        token.Degen.Social
                          ? "text-color_green"
                          : "text-color_red"
                      }`}
                    >
                      Social
                    </span>
                  )}
                  {token.Degen?.Top10 !== undefined && (
                    <span
                      className={`px-2 py-0.5 text-xs ${
                        token.Degen.Top10 > 30
                          ? "text-color_red"
                          : "text-color_green"
                      }`}
                    >
                      Top10: {token.Degen.Top10}%
                    </span>
                  )}
                  {token.Degen?.Insiders !== undefined && (
                    <span
                      className={`px-2 py-0.5 text-xs ${
                        token.Degen.Insiders > 2
                          ? "text-color_red"
                          : "text-color_green"
                      }`}
                    >
                      Insiders: {token.Degen.Insiders}%
                    </span>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
