import { useState } from "react";
import { TransactionIcon } from "../assets";
import { Pagination } from "../components/pagination";
import { TitleBox } from "../components/TitleBox";
import { ToolBox } from "../components/txns/ToolBox";
import { TxnTable } from "../components/txns/TxnTable";
import { TestDataforTXs } from "../store/TestData/testData";

export const Transactions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageUnit, setPageUnit] = useState(10); // 10, 20, 50
  const [totalPages] = useState(10);
  const [totalCount] = useState(0);
  const [during, setDuring] = useState("15m"); // 15m, 3h, 3h
  return (
    <>
      <div className="flex flex-col flex-1 overflow-y-auto h-full bg-bg_gray">
        <TitleBox title="Transaction" icon={<TransactionIcon />} />
        <ToolBox during={during} setDuring={setDuring}/>
        <TxnTable txns={TestDataforTXs} />
        <Pagination
          totaldata={totalCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          pageUnit={pageUnit}
          setPageUnit={setPageUnit}
        />
      </div>
    </>
  );
};
