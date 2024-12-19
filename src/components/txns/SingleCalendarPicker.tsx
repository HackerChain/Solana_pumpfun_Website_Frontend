import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { CalendarIcon } from "../../assets";

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
      return `${format(startDate, "d MMM yyyy")} - ${format(
        endDate,
        "d MMM yyyy"
      )}`;
    }

    if (startDate) {
      return format(startDate, "d MMM yyyy");
    }

    return "Select date range";
  };

  return (
    <div className="relative ">
      <div
        onClick={toggleCalendar}
        className="w-full px-3 h-[36px] flex items-center gap-3 text-left bg-bg_gray_light shadow-[inset_0_1px_1px_1px_#F6F7FA22] rounded-md focus:outline-none "
      >
        <CalendarIcon />
        <span className="flex items-center">{formatDateRange()}</span>
      </div>
      {/* // TODO: Add the calendar component here */}
      {isOpen && (
        <div className="absolute mt-[2px] bg-secondary_dark_500 border border-secondary_dark_600 rounded-md p-2 shadow-lg z-[100] text-sm">
          <DayPicker
            mode="range"
            defaultMonth={startDate}
            selected={selectedRange}
            onSelect={handleRangeSelect}
            numberOfMonths={2}
            modifiers={{
              selected: selectedRange,
            }}
            modifiersStyles={{
              selected: {
                backgroundColor: "#44444A", // primary_dark_500 from your theme
                color: "#E7E0EC",
                borderRadius: "50%",
              },
              range_start: {
                backgroundColor: "red", // primary_dark_600
                color: "white",
              },
              range_end: {
                backgroundColor: "#3C3AD0", // primary_dark_600
                color: "white",
              },
            }}
            styles={{
              day: { color: "#DCE4E8" }, // text_activate from your theme
              caption: { color: "#E7E0EC" },
              head_cell: { color: "#DCE4E8" }, // text_dark from your theme
              nav_button: { color: "#DCE4E8" },
            }}
          />
        </div>
      )}
    </div>
  );
};
