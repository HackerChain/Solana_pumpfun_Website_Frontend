import { useState } from "react";
import { FilterIcon, SearchIcon } from "../../assets";
import { TokenTxs } from "../../types/assetsTx";
import { formatNumber, formatTimestamp } from "../../utils/utils";
import { getDevColor } from "../Dashboard/TokenTable";
import { Pagination } from "../pagination";

interface TokenTxsProps {
  data: TokenTxs[];
}

const getSideColor = (profit: number) => {
  if (profit > 0) {
    return "text-color_green";
  }
  if (profit < 0) {
    return "text-color_red";
  }
  return "";
};

export const TxHistoryTable: React.FC<TokenTxsProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  return (
    <div className="w-full overflow-y-auto flex flex-1 px-[30px] pb-[30px]">
      <div className="flex flex-1 flex-col rounded-2xl border-[1px] border-bg_gray_light overflow-y-auto">
        <div className="m-[30px] overflow-x-auto overflow-y-auto flex flex-1 flex-col gap-[16px]">
          <div className="flex flex-row justify-between items-center">
            <p className="text-base">Transaction</p>
            <div className="flex flex-row gap-4 items-center">
              <div className="flex items-center gap-2 pr-6 border-r-[1px] border-bg_gray_light ">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={"Search anything..."}
                    className="w-full h-[36px] bg-[#17172E] text-white placeholder-secondary_light_400 
        border border-secondary_dark_600 rounded-md pl-10 pr-4 py-1
        focus:outline-none focus:ring-2 focus:ring-primary_dark_700
        transition duration-300 ease-in-out"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <SearchIcon />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center rounded-lg bg-bg_gray_light w-[40px] h-[40px]">
                <FilterIcon />
              </div>
            </div>
          </div>
          <div className="flex flex-1 overflow-y-auto">
            <table className="w-full border-collapse overflow-y-auto ">
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
                    <div className="table-header-style">MC</div>
                  </th>
                  <th className="bg-secondary_dark_600">
                    <div className="table-header-style">Price</div>
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
                {data[0].txns.map((tx, index) => (
                  <tr
                    key={index}
                    className="items-center h-[40px] xl:h-[50px] 2xl:h-[60px] text-xs xl:text-sm 2xl:text-base px-2"
                  >
                    <td className="table-data-style px-2 w-[180px] 2xl:w-[200px]">
                      <div className="flex flex-row gap-4">
                        <input type="checkbox" />
                        <p>{formatTimestamp(tx.time || 0)}</p>
                      </div>
                    </td>
                    <td className="table-data-style w-[180px] xl:w-[200px] 2xl:w-[220px]">
                      {data[0].name || ""}
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
                      ${formatNumber(tx.marketCap || 0)}
                    </td>
                    <td className="table-data-style">
                      ${formatNumber(tx.price || 0)}
                    </td>
                    <td className="table-data-style">
                      ${formatNumber(tx.tokens || 0)}
                    </td>
                    <td className="table-data-style">
                      {tx.fee ? `${formatNumber(tx.fee)} SOL` : "-"}
                    </td>
                    <td className="table-data-style w-[100px] xl:w-[140px] 2xl:w-[180px]">
                      <div className="flex flex-col flex-1">
                        <p>{formatNumber(tx.total || 0)}</p>
                      </div>
                    </td>
                    <td
                      className={`table-data-style ${getSideColor(
                        tx.profit.size
                      )} pr-2`}
                    >
                      {tx.profit
                        ? `● ${tx.profit.size > 0 ? "+ " : "- "}${formatNumber(
                            Math.abs(tx.profit.size)
                          )}%`
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          maxVisible={4}
        />
      </div>
    </div>
  );
};
