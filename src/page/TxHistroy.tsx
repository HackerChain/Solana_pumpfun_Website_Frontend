// import { useParams } from "react-router-dom";
import { TokenInfo } from "../components/TxHistroy/TokenInfo";
import { TxHistoryTable } from "../components/TxHistroy/TxHistoryTable";
import { TestDataforTokenTxs } from "../store/TestData/testData";
import { TitleBox } from "../components/TitleBox";
import { TransactionIcon } from "../assets";

export const TxHistory = () => {
  // const { ca } = useParams();
  return (
    <div className="flex flex-col flex-1 overflow-y-auto h-full bg-bg_gray">
      <TitleBox title="Detail" icon={<TransactionIcon />} />
      <TokenInfo data={TestDataforTokenTxs} />
      <TxHistoryTable data={TestDataforTokenTxs} />
    </div>
  );
};
