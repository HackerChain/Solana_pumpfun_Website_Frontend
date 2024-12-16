export interface Transaction {
  id?: number;
  tx?: string;
  contractAddress?: string;
  time?: number;
  name?: string;
  side?: string;
  Price?: number;
  MarketCap?: number;
  Tokens?: number;
  Fee?: number;
  Total?: number;
  profit?: number;
}
