import { useState } from "react";
import { TransactionIcon } from "../assets";
import { Pagination } from "../components/pagination";
import { TitleBox } from "../components/TitleBox";
import { ToolBox } from "../components/txns/ToolBox";
import { TxnTable } from "../components/txns/TxnTable";
import { TestDataforTXs } from "../store/TestData/testData";

export const Transactions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  return (
    <>
      <div className="flex flex-col flex-1 overflow-y-auto h-full bg-bg_gray">
        <TitleBox title="Transaction" icon={<TransactionIcon />} />
        <ToolBox />
        <TxnTable txns={TestDataforTXs} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          maxVisible={4}
        />
      </div>
    </>
  );
};
