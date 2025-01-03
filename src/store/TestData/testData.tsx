import { TokenTxs } from "../../types/assetsTx";
import { Token } from "../../types/dashboard";
import { Transaction } from "../../types/transactions";
export const TestDataforDashboard: Token[] = [
  {
    name: "Token name 0",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",
    tokenId: 0,
    DEV: "Sell",
    Age: "84h",
    Price: 0.0383228,
    MarketCap: 68997000,
    FDV: 68671000,
    ISToken: {
      size: 47293000,
      percent: 14,
    },
    CSToken: {
      size: 78656000,
      percent: 7,
    },
    TSToken: 100000000,
    TXsPerHr: 51000,
    VolPerHr: 9000000,
    Degen: {
      NoMint: true,
      Blacklist: false,
      Burnt: true,
      Insiders: 1.3,
    },
  },
  {
    name: "Token name 1",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",
    tokenId: 1,
    DEV: "Sell All",
    Age: "60h",
    Price: 0.0154686,
    MarketCap: 78365000,
    FDV: 14668000,
    ISToken: {
      size: 59112000,
      percent: 9,
    },
    CSToken: {
      size: 41981000,
      percent: 6,
    },
    TSToken: 1200000000,
    TXsPerHr: 78100,
    VolPerHr: 7000000,
    Degen: {
      NoMint: false,
      Blacklist: false,
      Burnt: false,
      Social: true,
      Top10: 21.2,
      Insiders: 5,
    },
  },
  {
    name: "Token name 2",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",
    tokenId: 2,
    DEV: "Sell All",
    Age: "19m",
    Price: 0.0939741,
    MarketCap: 98937000,
    FDV: 27687000,
    ISToken: {
      size: 45936000,
      percent: 10,
    },
    CSToken: {
      size: 796000,
      percent: 6,
    },
    TSToken: 1500000000,
    TXsPerHr: 90900,
    VolPerHr: 9000000,
    Degen: {
      NoMint: true,
      Blacklist: false,
      Burnt: true,
      Social: true,
      Top10: 44,
      Insiders: 0.8,
    },
  },
  {
    name: "Token name 3",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",
    tokenId: 3,
    DEV: "Sell All",
    Age: "84d",
    Price: 0.0754632,
    MarketCap: 96956000,
    FDV: 92470000,
    ISToken: {
      size: 91997000,
      percent: 4,
    },
    CSToken: {
      size: 88468000,
      percent: 15,
    },
    TSToken: 1800000000,
    TXsPerHr: 76700,
    VolPerHr: 1000000,
    Degen: {
      NoMint: false,
      Blacklist: false,
      Burnt: false,
      Social: false,
      Top10: 7.9,
      Insiders: 7.4,
    },
  },
  {
    name: "Token name 4",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",
    tokenId: 4,
    DEV: "Sell All",
    Age: "65d",
    Price: 0.0701493,
    MarketCap: 20425000,
    FDV: 45462000,
    ISToken: {
      size: 60402000,
      percent: 17,
    },
    CSToken: {
      size: 58250000,
      percent: 2,
    },
    TSToken: 1300000000,
    TXsPerHr: 600,
    VolPerHr: 4000000,
    Degen: {
      NoMint: true,
      Blacklist: true,
      Burnt: false,
      Social: false,
      Top10: 44,
      Insiders: 1.3,
    },
  },
  {
    name: "Token name 5",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",
    tokenId: 5,
    DEV: "Buy",
    Age: "22d",
    Price: 0.086645,
    MarketCap: 15170000,
    FDV: 85843000,
    ISToken: {
      size: 14666000,
      percent: 10,
    },
    CSToken: {
      size: 93990000,
      percent: 13,
    },
    TSToken: 0,
    TXsPerHr: 77200,
    VolPerHr: 5000000,
    Degen: {
      NoMint: false,
      Blacklist: false,
      Burnt: false,
      Social: false,
      Top10: 47.2,
      Insiders: 7.4,
    },
  },
  {
    name: "Token name 6",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",
    tokenId: 6,
    DEV: "Buy",
    Age: "75d",
    Price: 0.0498257,
    MarketCap: 89897000,
    FDV: 19802000,
    ISToken: {
      size: 86259000,
      percent: 1,
    },
    CSToken: {
      size: 67749000,
      percent: 3,
    },
    TSToken: 600000000,
    TXsPerHr: 56300,
    VolPerHr: 6000000,
    Degen: {
      NoMint: false,
      Blacklist: true,
      Burnt: true,
      Social: false,
      Top10: 18,
      Insiders: 3.5,
    },
  },
  {
    name: "Token name 7",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",
    tokenId: 7,
    DEV: "HODL",
    Age: "56h",
    Price: 0.0369719,
    MarketCap: 97197000,
    FDV: 83657000,
    ISToken: {
      size: 63431000,
      percent: 4,
    },
    CSToken: {
      size: 37600000,
      percent: 11,
    },
    TSToken: 0,
    TXsPerHr: 47900,
    VolPerHr: 8000000,
    Degen: {
      NoMint: true,
      Blacklist: true,
      Burnt: true,
      Social: false,
      Top10: 19.4,
      Insiders: 0,
    },
  },
  {
    name: "Token name 8",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",
    tokenId: 8,
    DEV: "Buy",
    Age: "46m",
    Price: 0.0820315,
    MarketCap: 74820000,
    FDV: 29945000,
    ISToken: {
      size: 60055000,
      percent: 17,
    },
    CSToken: {
      size: 88140000,
      percent: 3,
    },
    TSToken: 700000000,
    TXsPerHr: 41900,
    VolPerHr: 8000000,
    Degen: {
      NoMint: false,
      Blacklist: false,
      Burnt: false,
      Social: false,
      Top10: 5.1,
      Insiders: 6.2,
    },
  },
  {
    name: "Token name 9",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",
    tokenId: 9,
    DEV: "HODL",
    Age: "42m",
    Price: 0.0513822,
    MarketCap: 24981000,
    FDV: 78904000,
    ISToken: {
      size: 86159000,
      percent: 7,
    },
    CSToken: {
      size: 13701000,
      percent: 15,
    },
    TSToken: 800000000,
    TXsPerHr: 29800,
    VolPerHr: 5000000,
    Degen: {
      NoMint: true,
      Blacklist: false,
      Burnt: true,
      Social: false,
      Top10: 48.4,
      Insiders: 2.8,
    },
  },
  {
    name: "Token name 10",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",
    tokenId: 10,
    DEV: "Buy",
    Age: "6h",
    Price: 0.0410121,
    MarketCap: 52219000,
    FDV: 93647000,
    ISToken: {
      size: 55836000,
      percent: 10,
    },
    CSToken: {
      size: 69048000,
      percent: 8,
    },
    TSToken: 1700000000,
    TXsPerHr: 46000,
    VolPerHr: 0,
    Degen: {
      NoMint: true,
      Blacklist: true,
      Burnt: false,
      Social: true,
      Top10: 45.3,
      Insiders: 6.2,
    },
  },
  {
    name: "Token name 11",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",
    tokenId: 11,
    DEV: "HODL",
    Age: "93h",
    Price: 0.0797699,
    MarketCap: 81174000,
    FDV: 14431000,
    ISToken: {
      size: 54673000,
      percent: 14,
    },
    CSToken: {
      size: 83382000,
      percent: 3,
    },
    TSToken: 1300000000,
    TXsPerHr: 79100,
    VolPerHr: 4000000,
    Degen: {
      NoMint: false,
      Blacklist: true,
      Burnt: false,
      Social: true,
      Top10: 36.7,
      Insiders: 8.7,
    },
  },
  {
    name: "Token name 12",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",
    tokenId: 12,
    DEV: "HODL",
    Age: "18m",
    Price: 0.0020697,
    MarketCap: 87383000,
    FDV: 17502000,
    ISToken: {
      size: 88272000,
      percent: 7,
    },
    CSToken: {
      size: 38494000,
      percent: 16,
    },
    TSToken: 0,
    TXsPerHr: 14500,
    VolPerHr: 5000000,
    Degen: {
      NoMint: true,
      Blacklist: false,
      Burnt: false,
      Social: true,
      Top10: 8.1,
      Insiders: 6.1,
    },
  },
  {
    name: "Token name 13",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",
    tokenId: 13,
    DEV: "Sell",
    Age: "27m",
    Price: 0.0190845,
    MarketCap: 25408000,
    FDV: 67221000,
    ISToken: {
      size: 95289000,
      percent: 17,
    },
    CSToken: {
      size: 54864000,
      percent: 11,
    },
    TSToken: 500000000,
    TXsPerHr: 32300,
    VolPerHr: 5000000,
    Degen: {
      NoMint: false,
      Blacklist: false,
      Burnt: false,
      Social: true,
      Top10: 34.4,
      Insiders: 5.6,
    },
  },
  {
    name: "Token name 14",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",
    tokenId: 14,
    DEV: "Sell All",
    Age: "51m",
    Price: 0.0157853,
    MarketCap: 43355000,
    FDV: 31274000,
    ISToken: {
      size: 27606000,
      percent: 0,
    },
    CSToken: {
      size: 87125000,
      percent: 16,
    },
    TSToken: 600000000,
    TXsPerHr: 80000,
    VolPerHr: 1000000,
    Degen: {
      NoMint: true,
      Blacklist: false,
      Burnt: true,
      Social: false,
      Top10: 18.7,
      Insiders: 7.9,
    },
  },
  {
    name: "Token name 15",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",
    tokenId: 15,
    DEV: "Sell",
    Age: "97m",
    Price: 0.0160236,
    MarketCap: 5650000,
    FDV: 9738000,
    ISToken: {
      size: 39788000,
      percent: 6,
    },
    CSToken: {
      size: 57114000,
      percent: 5,
    },
    TSToken: 200000000,
    TXsPerHr: 23000,
    VolPerHr: 4000000,
    Degen: {
      NoMint: false,
      Blacklist: true,
      Burnt: true,
      Social: false,
      Top10: 34.9,
      Insiders: 1.1,
    },
  },
  {
    name: "Token name 16",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",
    tokenId: 16,
    DEV: "HODL",
    Age: "40m",
    Price: 0.0315919,
    MarketCap: 57415000,
    FDV: 63944000,
    ISToken: {
      size: 40273000,
      percent: 4,
    },
    CSToken: {
      size: 2589000,
      percent: 4,
    },
    TSToken: 1900000000,
    TXsPerHr: 49900,
    VolPerHr: 6000000,
    Degen: {
      NoMint: true,
      Blacklist: false,
      Burnt: true,
      Social: true,
      Top10: 13.2,
      Insiders: 9.7,
    },
  },
  {
    name: "Token name 17",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",
    tokenId: 17,
    DEV: "Buy",
    Age: "97d",
    Price: 0.0214165,
    MarketCap: 42601000,
    FDV: 89707000,
    ISToken: {
      size: 27807000,
      percent: 17,
    },
    CSToken: {
      size: 4174000,
      percent: 1,
    },
    TSToken: 500000000,
    TXsPerHr: 79400,
    VolPerHr: 6000000,
    Degen: {
      NoMint: false,
      Blacklist: true,
      Burnt: false,
      Social: false,
      Top10: 16.5,
      Insiders: 5.3,
    },
  },
  {
    name: "Token name 18",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",
    tokenId: 18,
    DEV: "Buy",
    Age: "42h",
    Price: 0.0214998,
    MarketCap: 78109000,
    FDV: 46721000,
    ISToken: {
      size: 38525000,
      percent: 11,
    },
    CSToken: {
      size: 41776000,
      percent: 14,
    },
    TSToken: 800000000,
    TXsPerHr: 60000,
    VolPerHr: 3000000,
    Degen: {
      NoMint: true,
      Blacklist: true,
      Burnt: false,
      Social: false,
      Top10: 9.8,
      Insiders: 9,
    },
  },
  {
    name: "Token name 19",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",
    tokenId: 19,
    DEV: "HODL",
    Age: "5m",
    Price: 0.0453639,
    MarketCap: 28956000,
    FDV: 82887000,
    ISToken: {
      size: 47221000,
      percent: 1,
    },
    CSToken: {
      size: 51444000,
      percent: 17,
    },
    TSToken: 300000000,
    TXsPerHr: 65800,
    VolPerHr: 9000000,
    Degen: {
      NoMint: true,
      Blacklist: false,
      Burnt: true,
      Social: true,
      Top10: 8.1,
      Insiders: 0.9,
    },
  },
];

export const TestDataforTXs: Transaction[] = [
  {
    id: 0,
    tx: "3hbt7vcwjW7whJjjgV3oEAZqxJrfApnUfoRLhZcux1RC2o1AqNEnbnaEhbFUVpniSAyqHvi77VMq7ismYSxYVPC3",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",

    time: 1734338802630,
    name: "Token name 0",
    side: "Buy",
    Price: 0.000762,
    MarketCap: 52300,
    Tokens: 3689000,
    Fee: 2100000,
    Total: 37400,
  },
  {
    id: 1,
    tx: "3hbt7vcwjW7whJjjgV3oEAZqxJrfApnUfoRLhZcux1RC2o1AqNEnbnaEhbFUVpniSAyqHvi77VMq7ismYSxYVPC3",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",

    time: 1734338802630,
    name: "Token name 1",
    side: "Sell All",
    Price: 0.000954,
    MarketCap: 7700,
    Tokens: 297600,
    Fee: 3900000,
    Total: 30800,
    profit: 56.02,
  },
  {
    id: 2,
    tx: "3hbt7vcwjW7whJjjgV3oEAZqxJrfApnUfoRLhZcux1RC2o1AqNEnbnaEhbFUVpniSAyqHvi77VMq7ismYSxYVPC3",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",

    time: 1734338802630,
    name: "Token name 2",
    side: "Buy",
    Price: 0.00095,
    MarketCap: 58600,
    Tokens: 97200,
    Fee: 3300000,
    Total: 37400,
  },
  {
    id: 3,
    tx: "3hbt7vcwjW7whJjjgV3oEAZqxJrfApnUfoRLhZcux1RC2o1AqNEnbnaEhbFUVpniSAyqHvi77VMq7ismYSxYVPC3",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",

    time: 1734338802630,
    name: "Token name 3",
    side: "Sell",
    Price: 0.000325,
    MarketCap: 68300,
    Tokens: 8898500,
    Fee: 3800000,
    Total: 15900,
  },
  {
    id: 4,
    tx: "3hbt7vcwjW7whJjjgV3oEAZqxJrfApnUfoRLhZcux1RC2o1AqNEnbnaEhbFUVpniSAyqHvi77VMq7ismYSxYVPC3",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",

    time: 1734338802630,
    name: "Token name 4",
    side: "Buy",
    Price: 0.000564,
    MarketCap: 11200,
    Tokens: 7036900,
    Fee: 9100000,
    Total: 65600,
    profit: 30.07,
  },
  {
    id: 5,
    tx: "3hbt7vcwjW7whJjjgV3oEAZqxJrfApnUfoRLhZcux1RC2o1AqNEnbnaEhbFUVpniSAyqHvi77VMq7ismYSxYVPC3",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",

    time: 1734338802630,
    name: "Token name 5",
    side: "Buy",
    Price: 0.000504,
    MarketCap: 34200,
    Tokens: 4482300,
    Fee: 5700000,
    Total: 14700,
  },
  {
    id: 6,
    tx: "3hbt7vcwjW7whJjjgV3oEAZqxJrfApnUfoRLhZcux1RC2o1AqNEnbnaEhbFUVpniSAyqHvi77VMq7ismYSxYVPC3",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",

    time: 1734338802630,
    name: "Token name 6",
    side: "Buy",
    Price: 0.000337,
    MarketCap: 67600,
    Tokens: 1285800,
    Fee: 8800000,
    Total: 66500,
    profit: -76.19,
  },
  {
    id: 7,
    tx: "3hbt7vcwjW7whJjjgV3oEAZqxJrfApnUfoRLhZcux1RC2o1AqNEnbnaEhbFUVpniSAyqHvi77VMq7ismYSxYVPC3",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",

    time: 1734338802630,
    name: "Token name 7",
    side: "Buy",
    Price: 0.000076,
    MarketCap: 73900,
    Tokens: 1051000,
    Fee: 3200000,
    Total: 20600,
    profit: 77.72,
  },
  {
    id: 8,
    tx: "3hbt7vcwjW7whJjjgV3oEAZqxJrfApnUfoRLhZcux1RC2o1AqNEnbnaEhbFUVpniSAyqHvi77VMq7ismYSxYVPC3",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",

    time: 1734338802630,
    name: "Token name 8",
    side: "Buy",
    Price: 0.000019,
    MarketCap: 46500,
    Tokens: 2514000,
    Fee: 9000000,
    Total: 58600,
    profit: 13.89,
  },
  {
    id: 9,
    tx: "3hbt7vcwjW7whJjjgV3oEAZqxJrfApnUfoRLhZcux1RC2o1AqNEnbnaEhbFUVpniSAyqHvi77VMq7ismYSxYVPC3",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",

    time: 1734338802630,
    name: "Token name 9",
    side: "Buy",
    Price: 0.000692,
    MarketCap: 18700,
    Tokens: 855700,
    Fee: 1500000,
    Total: 53400,
  },
  {
    id: 10,
    tx: "3hbt7vcwjW7whJjjgV3oEAZqxJrfApnUfoRLhZcux1RC2o1AqNEnbnaEhbFUVpniSAyqHvi77VMq7ismYSxYVPC3",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",

    time: 1734338802630,
    name: "Token name 10",
    side: "Buy",
    Price: 0.000428,
    MarketCap: 39900,
    Tokens: 1817400,
    Fee: 5700000,
    Total: 58100,
    profit: 58.49,
  },
  {
    id: 11,
    tx: "3hbt7vcwjW7whJjjgV3oEAZqxJrfApnUfoRLhZcux1RC2o1AqNEnbnaEhbFUVpniSAyqHvi77VMq7ismYSxYVPC3",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",

    time: 1734338802630,
    name: "Token name 11",
    side: "Buy",
    Price: 0.00095,
    MarketCap: 95600,
    Tokens: 1248600,
    Fee: 9500000,
    Total: 88100,
  },
];

export const Logo1 = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_15727)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 15C30 23.2843 23.2843 30 15 30C6.71574 30 0 23.2843 0 15C0 6.71574 6.71574 0 15 0C23.2843 0 30 6.71574 30 15ZM9.18077 12.3202C9.18077 8.97898 11.7661 6.27737 14.9999 6.27737C18.2599 6.27737 20.8191 9.00598 20.8191 12.0965C20.8191 15.2407 18.2084 18.1394 14.9999 18.1394C14.3127 18.1394 13.6275 18.2655 12.9805 18.5091L14.0762 13.0302C14.2213 12.3049 13.7509 11.5993 13.0256 11.4543C12.3003 11.3092 11.5947 11.7796 11.4497 12.5049L9.5577 21.9647C9.53027 22.0378 9.50404 22.1119 9.47906 22.1869C9.42321 22.3545 9.40232 22.5253 9.41241 22.6914L9.21268 23.6899C9.06761 24.4153 9.53798 25.1209 10.2633 25.2658C10.9886 25.4109 11.6942 24.9405 11.8392 24.2154L12.1356 22.7334C12.6821 21.4839 13.8506 20.8179 14.9999 20.8179C19.8447 20.8179 23.4977 16.5581 23.4977 12.0965C23.4977 7.58124 19.7932 3.5988 14.9999 3.5988C10.1805 3.5988 6.5022 7.60824 6.5022 12.3202C6.5022 13.0599 7.10181 13.6595 7.84149 13.6595C8.58116 13.6595 9.18077 13.0599 9.18077 12.3202ZM18.6273 23.9526C18.6273 24.8402 17.9078 25.5598 17.0202 25.5598C16.1326 25.5598 15.4131 24.8402 15.4131 23.9526C15.4131 23.0651 16.1326 22.3455 17.0202 22.3455C17.9078 22.3455 18.6273 23.0651 18.6273 23.9526Z"
        fill="#2DF400"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_15727">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const Logo2 = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_15745)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 15C30 23.2843 23.2843 30 15 30C6.71574 30 0 23.2843 0 15C0 6.71574 6.71574 0 15 0C23.2843 0 30 6.71574 30 15ZM9.18077 12.3202C9.18077 8.97898 11.7661 6.27737 14.9999 6.27737C18.2599 6.27737 20.8191 9.00598 20.8191 12.0965C20.8191 15.2407 18.2084 18.1394 14.9999 18.1394C14.3127 18.1394 13.6275 18.2655 12.9805 18.5091L14.0762 13.0302C14.2213 12.3049 13.7509 11.5993 13.0256 11.4543C12.3003 11.3092 11.5947 11.7796 11.4497 12.5049L9.5577 21.9647C9.53027 22.0378 9.50404 22.1119 9.47906 22.1869C9.42321 22.3545 9.40232 22.5253 9.41241 22.6914L9.21268 23.6899C9.06761 24.4153 9.53798 25.1209 10.2633 25.2658C10.9886 25.4109 11.6942 24.9405 11.8392 24.2154L12.1356 22.7334C12.6821 21.4839 13.8506 20.8179 14.9999 20.8179C19.8447 20.8179 23.4977 16.5581 23.4977 12.0965C23.4977 7.58124 19.7932 3.5988 14.9999 3.5988C10.1805 3.5988 6.5022 7.60824 6.5022 12.3202C6.5022 13.0599 7.10181 13.6595 7.84149 13.6595C8.58116 13.6595 9.18077 13.0599 9.18077 12.3202ZM18.6273 23.9526C18.6273 24.8402 17.9078 25.5598 17.0202 25.5598C16.1326 25.5598 15.4131 24.8402 15.4131 23.9526C15.4131 23.0651 16.1326 22.3455 17.0202 22.3455C17.9078 22.3455 18.6273 23.0651 18.6273 23.9526Z"
        fill="#F1A500"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_15745">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const Logo3 = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_15758)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 15C30 23.2843 23.2843 30 15 30C6.71574 30 0 23.2843 0 15C0 6.71574 6.71574 0 15 0C23.2843 0 30 6.71574 30 15ZM9.18077 12.3202C9.18077 8.97898 11.7661 6.27737 14.9999 6.27737C18.2599 6.27737 20.8191 9.00598 20.8191 12.0965C20.8191 15.2407 18.2084 18.1394 14.9999 18.1394C14.3127 18.1394 13.6275 18.2655 12.9805 18.5091L14.0762 13.0302C14.2213 12.3049 13.7509 11.5993 13.0256 11.4543C12.3003 11.3092 11.5947 11.7796 11.4497 12.5049L9.5577 21.9647C9.53027 22.0378 9.50404 22.1119 9.47906 22.1869C9.42321 22.3545 9.40232 22.5253 9.41241 22.6914L9.21268 23.6899C9.06761 24.4153 9.53798 25.1209 10.2633 25.2658C10.9886 25.4109 11.6942 24.9405 11.8392 24.2154L12.1356 22.7334C12.6821 21.4839 13.8506 20.8179 14.9999 20.8179C19.8447 20.8179 23.4977 16.5581 23.4977 12.0965C23.4977 7.58124 19.7932 3.5988 14.9999 3.5988C10.1805 3.5988 6.5022 7.60824 6.5022 12.3202C6.5022 13.0599 7.10181 13.6595 7.84149 13.6595C8.58116 13.6595 9.18077 13.0599 9.18077 12.3202ZM18.6273 23.9526C18.6273 24.8402 17.9078 25.5598 17.0202 25.5598C16.1326 25.5598 15.4131 24.8402 15.4131 23.9526C15.4131 23.0651 16.1326 22.3455 17.0202 22.3455C17.9078 22.3455 18.6273 23.0651 18.6273 23.9526Z"
        fill="#8D64EC"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_15758">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const TestDataforTokenTxs: TokenTxs[] = [
  {
    name: "Token name 0",
    contractAddress: "97Mbx6Jym1iEkQdVfLf5PMWL5tARGnQ5na5jhR9Lpump",
    symbol: "MEM",
    profit: {
      realised: 714.67,
      unRealised: 167.75,
    },
    feePaid: 4.61,
    age: "74m",
    currentPrice: 0.0066147,
    marketCap: 44295000,
    FDV: 53667000,
    avgInvestPrice: 2240.94,
    totalInvest: 6383.39,
    Holdings: {
      size: 89.691,
      percent: 8.71,
    },
    txns: [
      {
        time: 1734678849226,
        side: "Buy",
        marketCap: 35515000,
        price: 0.064209,
        tokens: 75988,
        fee: 0.8429,
        total: 6047400000,
        profit: {
          size: -62035,
          percent: 48.7,
        },
      },
      {
        time: 1734678849226,
        side: "HODL",
        marketCap: 47261000,
        price: 0.0185459,
        tokens: 84122,
        fee: 0.38062,
        total: 912500000,
        profit: {
          size: 12653,
          percent: 15,
        },
      },
      {
        time: 1734678849226,
        side: "Sell",
        marketCap: 28045000,
        price: 0.0016827,
        tokens: 45179,
        fee: 0.85502,
        total: 9594900000,
        profit: {
          size: -73965,
          percent: 44.6,
        },
      },
      {
        time: 1734678849226,
        side: "Sell All",
        marketCap: 25666000,
        price: 0.0669717,
        tokens: 29935,
        fee: 0.78589,
        total: 3093700000,
        profit: {
          size: -28832,
          percent: 2.7,
        },
      },
      {
        time: 1734678849226,
        side: "Sell",
        marketCap: 9563000,
        price: 0.0304182,
        tokens: 81797,
        fee: 0.18627,
        total: 3529700000,
        profit: {
          size: 21432,
          percent: 12.2,
        },
      },
      {
        time: 1734678849226,
        side: "HODL",
        marketCap: 64067000,
        price: 0.0152514,
        tokens: 82864,
        fee: 0.48371,
        total: 4707900000,
        profit: {
          size: 6529,
          percent: 17.3,
        },
      },
      {
        time: 1734678849226,
        side: "Buy",
        marketCap: 49845000,
        price: 0.0449362,
        tokens: 74667,
        fee: 0.30966,
        total: 8144900000,
        profit: {
          size: 29248,
          percent: 54.1,
        },
      },
      {
        time: 1734678849226,
        side: "Sell All",
        marketCap: 81920000,
        price: 0.0520888,
        tokens: 77589,
        fee: 0.10504,
        total: 1645200000,
        profit: {
          size: -34546,
          percent: 54.8,
        },
      },
      {
        time: 1734678849226,
        side: "HODL",
        marketCap: 19804000,
        price: 0.0784175,
        tokens: 51780,
        fee: 0.77439,
        total: 4763900000,
        profit: {
          size: -70323,
          percent: 56.7,
        },
      },
      {
        time: 1734678849226,
        side: "Sell All",
        marketCap: 77734000,
        price: 0.0235379,
        tokens: 62528,
        fee: 0.51497,
        total: 1723000000,
        profit: {
          size: -61258,
          percent: 14.6,
        },
      },
      {
        time: 1734678849226,
        side: "Sell",
        marketCap: 40732000,
        price: 0.0523619,
        tokens: 4847,
        fee: 0.10716,
        total: 6764400000,
        profit: {
          size: 25491,
          percent: 16.2,
        },
      },
      {
        time: 1734678849226,
        side: "Sell",
        marketCap: 13514000,
        price: 0.0636283,
        tokens: 25352,
        fee: 0.6705,
        total: 4205600000,
        profit: {
          size: 69127,
          percent: 48.2,
        },
      },
      {
        time: 1734678849226,
        side: "Sell",
        marketCap: 67758000,
        price: 0.0904589,
        tokens: 35206,
        fee: 0.2978,
        total: 9161100000,
        profit: {
          size: -95230,
          percent: 34.7,
        },
      },
      {
        time: 1734678849226,
        side: "Sell",
        marketCap: 29260000,
        price: 0.0264008,
        tokens: 70846,
        fee: 0.14059,
        total: 9300300000,
        profit: {
          size: 17742,
          percent: 41.1,
        },
      },
      {
        time: 1734678849226,
        side: "HODL",
        marketCap: 51882000,
        price: 0.0099632,
        tokens: 82170,
        fee: 0.52898,
        total: 7834900000,
        profit: {
          size: 92642,
          percent: 52.7,
        },
      },
      {
        time: 1734678849226,
        side: "Sell All",
        marketCap: 10737000,
        price: 0.07604,
        tokens: 59050,
        fee: 0.26746,
        total: 6469100000,
        profit: {
          size: -50938,
          percent: 17.2,
        },
      },
    ],
  },
];
