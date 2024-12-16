import { TimeToolBox } from "../components/Dashboard/TimeToolBox";
import { TokenTable } from "../components/Dashboard/TokenTable";
import { TestDataforDashboard } from "../store/testData";

export const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col h-full">
        <TimeToolBox />
        <TokenTable tokens={TestDataforDashboard} />
      </div>
    </>
  );
};
