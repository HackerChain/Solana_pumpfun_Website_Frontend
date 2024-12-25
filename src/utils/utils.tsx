import { toast } from "react-toastify";

export const formatNumber = (num: number): string => {
  const absNum = Math.abs(num);
  if (absNum >= 1000000000) {
    return (Math.floor(absNum / 10000000) / 100).toFixed(2) + "B";
  } else if (absNum >= 1000000) {
    return (Math.floor(absNum / 10000) / 100).toFixed(2) + "M";
  } else if (absNum >= 1000) {
    return (Math.floor(absNum / 10) / 100).toFixed(2) + "K";
  }

  if (absNum < 1) {
    const str = num.toString();
    const [, decimal] = str.split(".");
    let zeroCount = 0;
    if (!decimal) return num.toFixed(2);
    for (const char of decimal) {
      if (char === "0") {
        zeroCount++;
      } else {
        break;
      }
    }

    if (zeroCount >= 3) {
      const subscript = zeroCount
        .toString()
        .split("")
        .map((n) => String.fromCharCode(0x2080 + parseInt(n)))
        .join("");

      const remainingDigits = parseFloat(
        `0.${decimal.slice(zeroCount)}`
      ).toFixed(4);
      return `0.0${subscript}${remainingDigits.slice(2)}`;
    }
    return num.toFixed(2);
  }
  return num.toFixed(2);
};

export const formatAddress = (address: string): string => {
  if (address.length <= 8) return address;
  return `${address.slice(0, 5)}...${address.slice(-3)}`;
};

export const formatTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds());

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export const shortenAddress = (address: string, chars = 4): string => {
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
};

export const getTimeDelta = (timestamp: number): string => {
  const now = Date.now();
  const diff = now - timestamp;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (days > 0) return `${days}d`;
  if (hours > 0) return `${hours}h`;
  if (minutes > 0) return `${minutes}m`;
  return "now";
};

export const copyToClipboard = async (text: string) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
      } finally {
        textArea.remove();
      }
    }

    toast.success("Copied to clipboard");
  } catch (error) {
    toast.error("Failed to copy to clipboard");
  }
};

export const getPumpfunUrlForToken = (mint: string) => {
  return `https://pump.fun/${mint}`;
};
