import { TokenTable } from "../components/Dashboard/TokenTable";
import { ToolBox } from "../components/txns/ToolBox";
import { TestDataforDashboard } from "../store/testData";

export const Transactions = () => {
  return (
    <>
      <div className="flex flex-col h-full">
        <ToolBox />
        <TokenTable tokens={TestDataforDashboard} />
      </div>
    </>
  );
};
