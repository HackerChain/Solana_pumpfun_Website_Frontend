import { DashboardIcon } from "../assets";
import { TokenTable } from "../components/Dashboard/TokenTable";
import { TitleBox } from "../components/TitleBox";
import { ToolBox } from "../components/Dashboard/ToolBox";
import { TestDataforDashboard } from "../store/TestData/testData";

export const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col h-full">
        <TitleBox title="Dashboard" icon={<DashboardIcon />} />
        <ToolBox />
        <TokenTable tokens={TestDataforDashboard} />
      </div>
    </>
  );
};
