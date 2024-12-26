import React, { useState, useEffect } from "react";
import { formatNumber } from "../../utils/utils";

interface GaugeMeterProps {
  value: number;
  min?: number;
  max?: number;
}

const CustomGaugeMeter: React.FC<GaugeMeterProps> = ({
  value,
  min = 0,
  max = 1500,
}) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const calculatedPercentage = ((value - min) / (max - min)) * 100;
    setPercentage(Math.min(Math.max(calculatedPercentage, 0), 100));
  }, [value, min, max]);

  return (
    <div className="rounded-lg w-full">
      <div className="flex flex-row justify-start px-1 gap-2 items-center text-center">
        <p className="text-xxs xl:text-xs text-gray-300">
          {formatNumber(value)}
        </p>
        <p
          className={`text-xxs xl:text-xs ${
            value < 100
              ? "text-red-500"
              : value < 500
              ? "text-yellow-500"
              : "text-green-500"
          }`}
        >
          {value < 100 ? "Week" : value < 500 ? "Normal" : "Strong"}
        </p>
      </div>
      <div className="relative h-4 overflow-hidden px-[7px]">
        <div className="absolute h-[6px] translate-y-[5px] rounded-full inset-0 bg-gradient-to-r from-red-700 via-yellow-500 to-green-700" />
        <div className="relative h-full w-full">
          <div
            className="absolute translate-y-[1px] w-[14px] h-[14px] bg-white rounded-full shadow-lg transform -translate-x-1/2 transition-all duration-300 ease-in-out border-[2px] border-gray-400"
            style={{ left: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomGaugeMeter;
