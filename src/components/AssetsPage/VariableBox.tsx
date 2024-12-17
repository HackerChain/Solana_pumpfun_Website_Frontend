import { VariableBoxProps } from "../../types/metric";
import { Metric } from "./Metric";

export const VariableBox = ({
  currentBalance,
  totalProfit,
  realisedProfit,
  unrealisedProfit,
  totalInvested,
  totalTickersInvested,
  successTickers,
  feePaid,
}: VariableBoxProps) => {
  return (
    <div className="w-full rounded-lg px-52">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Metric
          label="Current Balance"
          value={currentBalance?.value}
          percentage={currentBalance?.percent}
          subValue={currentBalance?.profit}
        />

        <Metric label="Total Profit" value={totalProfit} />

        <Metric label="Realised Profit" value={realisedProfit} />

        <Metric label="Unrealized Profit" value={unrealisedProfit} />

        <Metric label="Total Invested" value={totalInvested} />

        <Metric label="Total tickers invested" value={totalTickersInvested} />

        <Metric
          label="Success tickers"
          value={successTickers?.value}
          percentage={successTickers?.percent}
        />

        <Metric
          label="Fee paid"
          value={feePaid !== undefined ? `${feePaid} SOL` : undefined}
        />
      </div>
    </div>
  );
};
