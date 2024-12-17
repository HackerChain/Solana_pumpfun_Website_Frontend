import { VariableBox } from "../components/AssetsPage/VariableBox";

const Variable = {
  currentBalance: {
    value: 19881.61,
    percent: 11.54,
    profit: 5644.72,
  },
  totalProfit: 11234.21,
  realisedProfit: 2651.05,
  unrealisedProfit: 2651.05,
  totalInvested: 2312.23,
  totalTickersInvested: 6431,
  successTickers: {
    value: 148,
    percent: 11.54,
  },
  feePaid: 2.5,
};

export const Assets = () => {
  return (
    <div className="flex flex-col w-full h-full px-[190px]">
      <VariableBox {...Variable} />
      <hr className="w-full border-bg_gray_light border-t my-12" />

      <div>table</div>
    </div>
  );
};
