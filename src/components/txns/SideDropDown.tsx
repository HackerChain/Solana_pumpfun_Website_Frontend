import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
  label?: string;
}

export const SideDropdown: React.FC<DropdownProps> = ({
  options,
  selected,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-left text-sm flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-color_pink text-bg_black"
      >
        <div className="w-full flex items-center justify-between flex-row">
          <div>Side</div>
          <div className="mr-2">{selected}</div>
        </div>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-color_pink border border-gray-300 rounded-md shadow-lg transition ">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 cursor-pointer hover:bg-purple-400 rounded-md"
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
