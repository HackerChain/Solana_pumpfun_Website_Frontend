interface ISToken {
  size: number;
  percent: number;
}

interface CSToken {
  size: number;
  percent: number;
}

interface Degen {
  NoMint?: boolean;
  Blacklist?: boolean;
  Burnt?: boolean;
  Social?: boolean;
  Top10?: number;
  Insiders?: number;
}

export interface Token {
  name: string;
  contractAddress: string;
  tokenId: number;
  DEV: string;
  Age: string;
  Price: number;
  MarketCap: number;
  FDV: number;
  ISToken: ISToken;
  CSToken: CSToken;
  TSToken: number;
  TXsPerHr: number;
  VolPerHr: number;
  Degen: Degen;
}
