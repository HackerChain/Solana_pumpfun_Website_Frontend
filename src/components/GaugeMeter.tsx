import React, { useState, useEffect } from "react";

interface GaugeMeterProps {
  value: number;
  min?: number;
  max?: number;
  label?: string;
}

const CustomGaugeMeter: React.FC<GaugeMeterProps> = ({
  value,
  min = 0,
  max = 3000,
  label = "Normal",
}) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const calculatedPercentage = ((value - min) / (max - min)) * 100;
    setPercentage(Math.min(Math.max(calculatedPercentage, 0), 100));
  }, [value, min, max]);

  return (
    <div className="rounded-lg w-full">
      <div className="flex flex-row justify-start gap-2 items-center text-center">
        <p className="text-xxs xl:text-xs text-gray-300">{value}</p>
        <p className="text-xxs xl:text-xs text-yellow-500">{label}</p>
      </div>
      <div className="relative h-4  overflow-hidden ">
        <div className="absolute h-1 translate-y-[5px] rounded-full inset-0 bg-gradient-to-r from-red-700 via-yellow-500 to-green-700" />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg transform -translate-x-1/2 transition-all duration-300 ease-in-out border-[2px] border-gray-300"
          style={{ left: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default CustomGaugeMeter;
