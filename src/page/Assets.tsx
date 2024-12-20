import { useState } from "react";
import { AssetsTable } from "../components/AssetsPage/AssetsTable";
import { VariableBox } from "../components/AssetsPage/VariableBox";
import { AssetsData } from "../store/TestData/assetsData";
import { Pagination } from "../components/pagination";
import { TitleBox } from "../components/TitleBox";
import { AssetsIcon } from "../assets";

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
    <div className="flex flex-col flex-1 overflow-y-auto h-full bg-bg_gray">
      <TitleBox title="Assets" icon={<AssetsIcon />} />
      {/* <VariableBox {...Variable} /> */}
      <AssetsTable tokens={AssetsData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        maxVisible={4}
      />
    </div>
  );
};
