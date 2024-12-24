import { NextIcon, PreviousIcon } from "../assets";
import { PageUnitDropdown } from "./PageUnitDropdown";

interface PaginationProps {
  totaldata: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  pageUnit: number;
  setPageUnit: (pageUnit: number) => void;
}

export const Pagination = ({
  totaldata,
  currentPage,
  setCurrentPage,
  totalPages,
  pageUnit,
  setPageUnit,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const maxVisible = 4;
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Always show first page
    pages.push(1);

    let start = Math.max(
      2,
      Math.min(currentPage - Math.floor(maxVisible / 2) + 1, 8)
    );
    let end = Math.min(totalPages - 1, start + maxVisible - 3);
    if (start > 2) pages.push("...");

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (end < totalPages - 1) pages.push("...");
    pages.push(totalPages);

    return pages;
  };

  const pageUnits = [10, 20, 50];

  return (
    <div className="flex items-center justify-between my-4 px-[30px]">
      <div className="w-[272px] flex items-center justify-center">
        <div
          onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}
          className={`flex flex-row gap-2 items-center justify-center px-2 rounded-lg border-[1px] w-[32px] h-[32px] mr-[24px] border-secondary_default ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:cursor-pointer hover:bg-primary_dark_700 transition duration-300 ease-in-out"
          }`}
        >
          <PreviousIcon />
        </div>

        {getPageNumbers().map((pageNum, idx) => (
          <div
            key={idx}
            onClick={() =>
              pageNum !== "..." && typeof pageNum === "number"
                ? setCurrentPage(pageNum)
                : undefined
            }
            className={`
            w-[32px] h-[32px] rounded-lg text-center justify-center items-center flex
            ${typeof pageNum === "number" ? "hover:bg-secondary_dark_500" : ""}
            ${
              Number(pageNum) === Number(currentPage)
                ? "bg-secondary_default"
                : " text-gray-700"
            }
            ${pageNum === "..." ? "cursor-default" : "cursor-pointer"}
          `}
          >
            {pageNum}
          </div>
        ))}

        <div
          onClick={() =>
            currentPage !== totalPages && setCurrentPage(currentPage + 1)
          }
          className={`flex flex-row gap-2 items-center justify-center px-2 rounded-lg border-[1px] w-[32px] h-[32px] ml-[24px] border-secondary_default ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:cursor-pointer hover:bg-primary_dark_700 transition duration-300 ease-in-out"
          }`}
        >
          <NextIcon />
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <p className="hidden md:block text-xs text-[#6C7278]">
          Showing {(currentPage - 1) * pageUnit + 1} to{" "}
          {Math.min(pageUnit * currentPage, totaldata)}
          of {totaldata} entries
        </p>
        <PageUnitDropdown
          options={pageUnits}
          selected={pageUnit}
          onSelect={setPageUnit}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};
