import React from "react";
import { formatNumber, formatTimestamp } from "../../utils/utils";
import { Logo1, Logo2, Logo3 } from "../../store/TestData/testData";
import { LinkIcon } from "../../assets";
import { Transaction } from "../../types/transactions";
import { getDevColor } from "../Dashboard/TokenTable";

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
            <th className="bg-secondary_dark_600 rounded-l-md px-2 ">
              <div className="table-header-style">Transaction Date</div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style">Token</div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style">Side</div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style">MC, $</div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style">Price, $</div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style">Tokens</div>
            </th>
            <th className="bg-secondary_dark_600">
              <div className="table-header-style">Fee</div>
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
              <td className="table-data-style px-2 w-[140px] 2xl:w-[160px]">
                <div className="flex flex-col">
                  <p>{formatTimestamp(tx.time || 0).split(" ")[0]}</p>
                  <p>{formatTimestamp(tx.time || 0).split(" ")[1]}</p>
                </div>
              </td>
              <td className="table-data-style w-[180px] 2xl:w-[250px] pr-4">
                <div className="flex flex-row justify-between items-center ">
                  <div className="flex flex-row items-center gap-2">
                    <div className="w-[22px] h-[22px] xl:w-[26px] xl:h-[26px] 2xl:w-[32px] 2xl:h-[32px] flex items-center">
                      {images[index % 3]}
                    </div>

                    <div className="flex flex-col justify-start">
                      <p className="font-medium line-clamp-1">{tx.name}</p>

                      <p className="text-text_dark text-start text-xxs xl:text-xs">
                        Text1
                      </p>
                    </div>
                  </div>
                  <LinkIcon />
                </div>
              </td>
              <td className="table-data-style w-[100px] 2xl:w-[140px]">
                <p
                  className={`w-fit rounded-full px-3 text-white ${getDevColor(
                    tx.side || ""
                  )}`}
                >
                  {tx.side}
                </p>
              </td>
              <td className="table-data-style">
                ${formatNumber(tx.MarketCap || 0)}
              </td>
              <td className="table-data-style">
                ${formatNumber(tx.Price || 0)}
              </td>
              <td className="table-data-style">
                ${formatNumber(tx.Tokens || 0)}
              </td>
              <td className="table-data-style">
                {tx.Fee ? `${formatNumber(tx.Fee / 1e9)} SOL` : "-"}
              </td>
              <td className="table-data-style w-[100px] xl:w-[140px] 2xl:w-[180px]">
                <div className="flex flex-col flex-1">
                  <p>{formatNumber(tx.Total || 0)}</p>
                  <p>(24%)</p>
                </div>
              </td>
              <td
                className={`table-data-style ${getSideColor(
                  tx.profit || 0
                )} pr-2`}
              >
                {tx.profit
                  ? `${tx.profit > 0 ? "+ " : ""}${formatNumber(tx.profit)} %`
                  : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
