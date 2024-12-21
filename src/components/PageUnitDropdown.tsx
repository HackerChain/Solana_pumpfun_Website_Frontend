import { useState } from "react";
import { DropupIcon } from "../assets";

interface PageUnitDropdownProps {
  options: number[];
  selected: number;
  onSelect: (option: number) => void;
  label?: string;
}

export const PageUnitDropdown: React.FC<PageUnitDropdownProps> = ({
  options,
  selected,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative sm:w-[100px]">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-secondary_dark_500 border border-secondary_dark_600 rounded-md p-2 text-left text-xs flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-color_pink hover:cursor-pointer hover:bg-primary_dark_700 transition duration-300 ease-in-out"
      >
        <div className="sm:hidden mr-1">{selected}</div>
        <div className="hidden sm:block">Show {selected}</div>
        <DropupIcon />
      </div>

      {isOpen && (
        <div className="absolute z-20 w-full mt-1 bg-secondary_dark_500 border border-secondary_dark_600 rounded-md shadow-lg transition -translate-y-[202px]">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 cursor-pointer hover:bg-bg_gray rounded-md"
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
