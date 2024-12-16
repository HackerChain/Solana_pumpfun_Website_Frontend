import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface SingleCalendarPickerProps {
  startDate: Date | undefined;
  endDate: Date | undefined;
  onStartDateChange: (date: Date | undefined) => void;
  onEndDateChange: (date: Date | undefined) => void;
}

export const SingleCalendarPicker: React.FC<SingleCalendarPickerProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>({
    from: startDate,
    to: endDate,
  });

  const handleRangeSelect = (range: DateRange | undefined) => {
    setSelectedRange(range);
    if (range?.from) {
      onStartDateChange(range.from);
    }
    if (range?.to) {
      onEndDateChange(range.to);
    }
  };

  const toggleCalendar = () => setIsOpen(!isOpen);

  const formatDateRange = () => {
    if (startDate && endDate) {
      return `${format(startDate, "MM/dd/yyyy")} - ${format(
        endDate,
        "MM/dd/yyyy"
      )}`;
    }
    if (startDate) {
      return format(startDate, "MM/dd/yyyy");
    }
    return "Select date range";
  };

  return (
    <div className="relative">
      <button
        onClick={toggleCalendar}
        className="w-full px-4 py-2 text-left bg-color_pink border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <span className="flex items-center">
          {formatDateRange()}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="absolute mt-1 bg-color_pink border border-gray-300 rounded-md shadow-lg z-10 text-sm">
          <DayPicker
            mode="range"
            defaultMonth={startDate}
            selected={selectedRange}
            onSelect={handleRangeSelect}
            numberOfMonths={2}
          />
        </div>
      )}
    </div>
  );
};
