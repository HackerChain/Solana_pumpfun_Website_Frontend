export interface Token {
  mint: string;
  name: string;
  symbol: string;
  image_url?: string;
  twitter?: string;
  telegram?: string;
  creator: string;
  created_timestamp: number;
  total_supply: number;
  market_cap: number;
  usd_market_cap: number;
  dev_state?: string;
  top10_percent?: number;
  circul_supply: number;
  mint_auth?: boolean;
  freeze_auth?: boolean;
  price:number;
  fdv:number;
}

export interface TokenState {
  tokens: Token[];
  loading: boolean;
  error: string | null;
}
