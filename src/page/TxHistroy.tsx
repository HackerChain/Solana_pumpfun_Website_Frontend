import { useParams } from "react-router-dom";
import { TokenInfo } from "../components/TxHistroy/TokenInfo";

export const TxHistory = () => {
  const { ca } = useParams();
  return (
    <div className="flex flex-col w-full h-full px-[242px]">
      <TokenInfo ca={ca} />
    </div>
  );
};
