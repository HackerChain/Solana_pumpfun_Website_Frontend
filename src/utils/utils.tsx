export const formatNumber = (num: number): string => {
  const absNum = Math.abs(num);

  if (absNum >= 1000000000) {
    return (num / 1000000000).toFixed(1) + "B";
  }

  if (absNum >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }

  if (absNum >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }

  return num.toString();
};

export const formatAddress = (address: string): string => {
  if (address.length <= 8) return address;
  return `${address.slice(0, 5)}...${address.slice(-3)}`;
};
