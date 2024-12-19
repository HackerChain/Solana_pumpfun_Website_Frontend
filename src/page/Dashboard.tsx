import { DashboardIcon } from "../assets";
import { TokenTable } from "../components/Dashboard/TokenTable";
import { TitleBox } from "../components/TitleBox";
import { ToolBox } from "../components/Dashboard/ToolBox";
import { TestDataforDashboard } from "../store/TestData/testData";
import { Pagination } from "../components/pagination";
import { useState } from "react";

export const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  return (
    <>
      <div className="flex flex-col flex-1 overflow-y-auto h-full bg-bg_gray">
        <TitleBox title="Dashboard" icon={<DashboardIcon />} />
        <ToolBox />
        <TokenTable tokens={TestDataforDashboard} />
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
