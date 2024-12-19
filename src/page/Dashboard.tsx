import { DashboardIcon } from "../assets";
import { TimeToolBox } from "../components/Dashboard/TimeToolBox";
import { TokenTable } from "../components/Dashboard/TokenTable";
import { TitleBox } from "../components/TitleBox";
import { TestDataforDashboard } from "../store/TestData/testData";

export const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col h-full">
        <TitleBox title="Dashboard" icon={<DashboardIcon />} />
        <TimeToolBox />
        <TokenTable tokens={TestDataforDashboard} />
      </div>
    </>
  );
};
