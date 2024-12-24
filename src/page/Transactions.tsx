import { useState } from "react";
import { TransactionIcon } from "../assets";
import { Pagination } from "../components/pagination";
import { TitleBox } from "../components/TitleBox";
import { ToolBox } from "../components/txns/ToolBox";
import { TxnTable } from "../components/txns/TxnTable";
import { TestDataforTXs } from "../store/TestData/testData";

export const Transactions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageUnit, setPageUnit] = useState(10);
  const [totalPages] = useState(10);
  const [totalTokens] = useState(0);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div className="flex flex-col flex-1 overflow-y-auto h-full bg-bg_gray">
        <TitleBox title="Transaction" icon={<TransactionIcon />} />
        <ToolBox />
        <TxnTable txns={TestDataforTXs} />
        <Pagination
        totaldata={totalTokens}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        pageUnit={pageUnit}
        setPageUnit={setPageUnit}
      />
      </div>
    </>
  );
};
