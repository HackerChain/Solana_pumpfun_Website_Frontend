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
    <div className="flex flex-col gap-1 p-4 items-start">
      <div className="text-text_dark text-[16px]">{label}</div>
      <div className="text-white text-[32px] font-semibold">
        {formatValue(value)}
      </div>
      {(subValue !== undefined || percentage !== undefined) && (
        <div className="flex gap-2 items-center justify-center">
          {percentage !== undefined && (
            <span
              className={`text-sm ${
                percentage >= 0
                  ? "text-color_green bg-[#16790030]/20 rounded-md p-1"
                  : "text-color_red"
              }`}
            >
              {percentage > 0 ? "+" : ""}
              {percentage}%
            </span>
          )}
          {subValue !== undefined && (
            <span className="text-sm text-color_green">
              {formatValue(subValue)}
              {subLabel && ` ${subLabel}`}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
