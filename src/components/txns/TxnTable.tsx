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
    <div className="w-full h-full px-[30px] shadow-md overflow-x-auto min-w-[1000px] overflow-y-auto flex flex-1 flex-col">
      <table className="w-full border-collapse">
        <thead className="sticky top-0 z-20 ">
          <tr className="h-[40px] text-center items-center text-xs xl:text-sm 2xl:text-base text-text_dark ">
            <th className="bg-secondary_dark_600 rounded-l-md px-2">
              <div className="table-header-style">Transaction Date</div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style">Token</div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style">Side</div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style">MC</div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style">Price</div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style hidden xl:table-cell">
                Token
              </div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style hidden xl:table-cell">Fee</div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style">Total</div>
            </th>
            <th className="bg-secondary_dark_600 rounded-r-md">
              <div className="table-header-style">Gain/Loss</div>
            </th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto h-full">
          {txns.map((tx, index) => (
            <tr
              key={index}
              className="items-center h-[40px] xl:h-[50px] 2xl:h-[60px] text-xs xl:text-sm 2xl:text-base px-2"
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
