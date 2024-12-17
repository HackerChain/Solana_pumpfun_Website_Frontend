import { ToolBox } from "../components/txns/ToolBox";
import { TxnTable } from "../components/txns/TxnTable";
import { TestDataforTXs } from "../store/TestData/testData";

export const Transactions = () => {
  return (
    <>
      <div className="flex flex-col h-full mx-72">
        <ToolBox />
        <TxnTable txns={TestDataforTXs} />
      </div>
    </>
  );
};
