import { toast } from "react-toastify";
import { AlertIcon, SearchIcon, WalletIcon } from "../assets";
import { shortenAddress } from "../utils/utils";

export const TitleBox = ({ title, icon }: { title: string; icon: any }) => {
  const handleWalletbtn = () => {
    // Success notification
    toast.success("Operation completed successfully!");

    // Error notification
    toast.error("Something went wrong!");

    // Info notification
    toast.info("New token added to the list");

    // Warning notification
    toast.warning("High volatility detected");
  };
  return (
    <>
      <div className="flex flex-row items-center justify-between gap-2 w-full h-[68px] px-[30px] border-b-[1px] border-bg_gray_light">
        <div className="flex flex-row items-center gap-2">
          {icon}
          {title}
        </div>
        <div className="flex flex-row items-center gap-6">
          <div className="flex items-center gap-2 pr-6 border-r-[1px] border-bg_gray_light ">
            <div className="relative">
              <input
                type="text"
                placeholder={"Search anything..."}
                className="w-full h-[40px] bg-[#17172E] text-white placeholder-secondary_light_400 
        border border-secondary_dark_600 rounded-md pl-10 pr-4 py-2
        focus:outline-none focus:ring-2 focus:ring-primary_dark_700
        transition duration-300 ease-in-out"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <SearchIcon />
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center gap-3">
            <div className="border-[1px] border-bg_gray_light rounded-md p-2 hover:cursor-pointer hover:bg-primary_dark_700 transition duration-300 ease-in-out">
              <AlertIcon />
            </div>
            <div
              className="border-[1px] border-bg_gray_light rounded-md h-[36px] text-center items-center flex justify-center px-2 gap-2 shadow-[inset_0_-7px_20px_2px_#F6F7FA22] hover:cursor-pointer hover:bg-primary_dark_700 transition duration-300 ease-in-out"
              onClick={handleWalletbtn}
            >
              <WalletIcon />
              <p className="hidden md:block">
                {shortenAddress(
                  "CEzN7mqP9xoxn8RyqPqJGGmU5Sn3ZdP6HpcJdVYXbendo",
                  9
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
