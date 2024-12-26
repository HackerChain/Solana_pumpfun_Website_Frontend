interface AssetsToken {
  name: string;
  contractAddress: string;
  tokenId: number;
  Age: string;
  currentPrice: number;
  MarketCap: number;
  FDV: number;
  avgInvestPrice: number;
  totalInvested: number;
  currentPnL?: {
    size?: number;
    percent?: number;
  };
  Holdings?: {
    size?: number;
    percent?: number;
  };
  sellingStep?: number;
  state?: string;
}
