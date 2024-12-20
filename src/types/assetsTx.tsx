interface Profit {
  realised: number;
  unRealised: number;
}

interface Holdings {
  size: number;
  percent: number;
}

interface Transaction {
  time: number;
  side: string;
  marketCap: number;
  price: number;
  tokens: number;
  fee: number;
  total: number;
  profit: {
    size: number;
    percent: number;
  };
}

export interface TokenTxs {
  name: string;
  contractAddress: string;
  symbol: string;
  profit: Profit;
  feePaid: number;
  age: string;
  currentPrice: number;
  marketCap: number;
  FDV: number;
  avgInvestPrice: number;
  totalInvest: number;
  Holdings: Holdings;
  txns: Transaction[];
}
