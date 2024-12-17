import { useState } from "react";
import { AssetsTable } from "../components/AssetsPage/AssetsTable";
import { VariableBox } from "../components/AssetsPage/VariableBox";
import { AssetsData } from "../store/TestData/assetsData";
import { Pagination } from "../components/AssetsPage/pagination";

const Variable = {
  currentBalance: {
    value: 19881.61,
    percent: 11.54,
    profit: 5644.72,
  },
  totalProfit: 11234.21,
  realisedProfit: 2651.05,
  unrealisedProfit: 2651.05,
  totalInvested: 2312.23,
  totalTickersInvested: 6431,
  successTickers: {
    value: 148,
    percent: 11.54,
  },
  feePaid: 2.5,
};

export const Assets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 68;
  return (
    <div className="flex flex-col w-full h-full px-[30px]">
      <VariableBox {...Variable} />
      <hr className="w-full border-bg_gray_light border-t my-12" />
      <AssetsTable tokens={AssetsData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        maxVisible={5}
      />
    </div>
  );
};
