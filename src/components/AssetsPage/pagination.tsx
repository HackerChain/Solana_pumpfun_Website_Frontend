import { NextIcon, PreviousIcon } from "../../assets";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisible?: number;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisible = 5,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Always show first page
    pages.push(1);

    let start = Math.max(2, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages - 1, start + maxVisible - 3);

    if (start > 2) pages.push("...");

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) pages.push("...");

    // Always show last page
    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="flex items-center justify-center my-4">
      <div className="w-[516px] flex items-center justify-center space-x-2 bg-gray-200 rounded-sm p-2">
        <div
          onClick={() => currentPage !== 1 && onPageChange(currentPage - 1)}
          className={`flex flex-row gap-2 items-center justify-center px-2 ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:cursor-pointer"
          }`}
        >
          <PreviousIcon />
          <p
            className={`text-sm ${
              currentPage === 1
                ? "text-text_deactivate_light"
                : "text-text_activate_dark"
            }`}
          >
            Previous
          </p>
        </div>

        {getPageNumbers().map((pageNum, idx) => (
          <button
            key={idx}
            onClick={() =>
              typeof pageNum === "number" ? onPageChange(pageNum) : null
            }
            disabled={pageNum === "..."}
            className={`
            min-w-[32px] h-8 px-3 rounded-md text-center justify-center items-center flex
            ${typeof pageNum === "number" ? "hover:bg-gray-300" : ""}
            ${
              pageNum === currentPage
                ? "bg-bg_black"
                : "bg-gray-200 text-gray-700"
            }
            ${pageNum === "..." ? "cursor-default" : ""}
          `}
          >
            {pageNum}
          </button>
        ))}

        <div
          onClick={() =>
            currentPage !== totalPages && onPageChange(currentPage + 1)
          }
          className={`flex flex-row gap-2 items-center justify-center px-2 ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:cursor-pointer"
          }`}
        >
          <p
            className={`text-sm ${
              currentPage === totalPages
                ? "text-text_deactivate_light"
                : "text-text_activate_dark"
            }`}
          >
            Next
          </p>
          <NextIcon />
        </div>
      </div>
    </div>
  );
};
