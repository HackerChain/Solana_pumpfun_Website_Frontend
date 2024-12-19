import React from "react";
import {
  formatAddress,
  formatNumber,
  formatTimestamp,
} from "../../utils/utils";
import { Logo1, Logo2, Logo3 } from "../../store/TestData/testData";
import { LinkIcon } from "../../assets";
import { Transaction } from "../../types/transactions";

interface TxnTableProps {
  txns: Transaction[];
}

const images = [<Logo1 />, <Logo2 />, <Logo3 />];

const getSideColor = (profit: number) => {
  if (profit > 0) {
    return "text-color_green";
  }
  if (profit < 0) {
    return "text-color_red";
  }
  return "";
};

export const TxnTable: React.FC<TxnTableProps> = ({ txns }) => {
  return (
    <div className="w-full h-full  shadow-md overflow-x-auto min-w-[1000px]">
      <table className="w-full border-collapse">
        <thead className="sticky top-0 h-20 bg-bg_gray/70 backdrop-blur-sm z-10">
          <tr className="h-[60px] text-center items-center text-sm text-text_dark">
            <th className="table-header-style">Transaction Date</th>
            <th className="table-header-style">Token</th>
            <th className="table-header-style">Side</th>
            <th className="table-header-style">MC</th>
            <th className="table-header-style">Price</th>
            <th className="table-header-style hidden xl:table-cell">Token</th>
            <th className="table-header-style hidden xl:table-cell">Fee</th>
            <th className="table-header-style">Total</th>
            <th className="table-header-style">Gain/Loss</th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto h-full">
          {txns.map((tx, index) => (
            <tr
              key={index}
              className="border-b-[1px] border-bg_gray_light h-[88px] bg-bg_gray"
            >
              {/* TODO fix token name style for response */}
              <td className="py-2 px-4">{formatTimestamp(tx.time || 0)}</td>
              <td className="py-2 px-4 max-w-[200px]">
                <div className="flex flex-row items-center justify-start gap-4">
                  <div className="flex flex-row gap-2 items-center justify-center">
                    <div className="hidden xl:block">{images[index % 3]}</div>
                    <div className="flex flex-col justify-start">
                      <p className="text-[#E7E0EC] font-medium text-lg">
                        {tx.name}
                      </p>
                      <div className="flex flex-row gap-2 items-center justify-start">
                        <p className="text-sm text-text_dark">
                          {formatAddress(tx.contractAddress || "")}
                        </p>
                        <LinkIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td className={`py-2 px-4 ${getSideColor(tx.profit || 0)}`}>
                {tx.side}
              </td>
              <td className="py-2 px-4">${formatNumber(tx.MarketCap || 0)}</td>
              <td className="py-2 px-4">${formatNumber(tx.Price || 0)}</td>
              <td className="py-2 px-4">${formatNumber(tx.Tokens || 0)}</td>
              <td className="py-2 px-4">{formatNumber(tx.Fee || 0)} SOL</td>
              <td className="py-2 px-4">{formatNumber(tx.Total || 0)} USDT</td>
              <td className={`py-2 px-4 ${getSideColor(tx.profit || 0)}`}>
                {tx.profit ? `${formatNumber(tx.profit)} %` : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
