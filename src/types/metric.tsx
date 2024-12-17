export interface MetricProps {
  label: string;
  value?: string | number;
  subValue?: string | number;
  subLabel?: string;
  percentage?: number;
}

export interface VariableBoxProps {
  currentBalance?: {
    value?: number;
    percent?: number;
    profit?: number;
  };
  totalProfit?: number;
  realisedProfit?: number;
  unrealisedProfit?: number;
  totalInvested?: number;
  totalTickersInvested?: number;
  successTickers?: {
    value?: number;
    percent?: number;
  };
  feePaid?: number;
}
