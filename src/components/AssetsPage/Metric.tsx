import { ArrowUpIcon } from "../../assets";
import { MetricProps } from "../../types/metric";

export const Metric = ({
  label,
  value,
  subValue,
  subLabel,
  percentage,
}: MetricProps) => {
  const formatValue = (val: string | number | undefined) => {
    if (val === undefined) return "N/A";
    if (typeof val === "number" && !val.toString().includes("SOL")) {
      return val.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      });
    }
    return val;
  };

  return (
    <div className="h-[65px] md:h-[80px] lg:h-[100px] bg-[#1E1E20] rounded-md border-[1px] border-bg_gray_light hover:cursor-pointer hover:bg-bg_gray flex flex-col gap-1 p-4 items-start">
      <div className="text-text_dark text-xs lg:text-sm">{label}</div>
      <div className="flex flex-row items-start gap-3">
        <div className="text-white text-lg_2 lg:text-xl font-semibold">
          {formatValue(value)}
        </div>
        {(subValue !== undefined || percentage !== undefined) && (
          <div className="flex xl:gap-2 items-center justify-left flex-col xl:flex-row">
            {percentage !== undefined && (
              <div className="flex flex-row  items-center justify-center">
                <div className="-translate-y-[1px] -translate-x-1">
                  <ArrowUpIcon />
                </div>
                <p
                  className={`text-xxs lg:text-xs ${
                    percentage >= 0 ? "text-success_base" : "text-color_red"
                  }`}
                >
                  {percentage}%
                </p>
              </div>
            )}
            {subValue !== undefined && (
              <p className="text-xxs lg:text-xs text-success_base line-clamp-1">
                {formatValue(subValue)}
                {subLabel && ` ${subLabel}`}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
