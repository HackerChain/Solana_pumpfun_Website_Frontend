import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AssetsIcon,
  DashboardIcon,
  DropDownIcon,
  ExitIcon,
  LogoIcon,
  SettingsIcon,
  TransactionIcon,
  UserIcon,
} from "../../assets";
import { useState } from "react";
import api from "../../utils/api";
import { useAuth } from "../../context/Auth";
import { toast } from "react-toastify";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: <DashboardIcon /> },
  { name: "Transaction", href: "/transactions", icon: <TransactionIcon /> },
  { name: "Assets", href: "/assets", icon: <AssetsIcon /> },
  { name: "Settings", href: "/settings", icon: <SettingsIcon /> },
];

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    toast.success("Logout successful");
    api.post("/auth/logout").then((res) => {
      if (res.status === 200) {
        navigate("/signin");
      }
    });
  };

  const UserBtns = [
    {
      title: "Profile",
      icon: <UserIcon />,
      action: () => {
        navigate("/settings/account");
      },
    },
    {
      title: "Exit",
      icon: <ExitIcon />,
      action: handleLogout,
    },
  ];

  return (
    <div className="flex w-full items-center justify-between mb-3 h-[60px] bg-bg_black">
      <div
        className="flex flex-row gap-2 mt-2 items-center text-white hover:cursor-pointer"
        onClick={() => navigate("/")}
      >
        <LogoIcon />
        Pumpfun
      </div>
      <div className="justify-between lg:w-[475px] h-[40px] flex">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`px-4 inline-flex text-sm text-secondary_light_300 hover:text-white transition-all duration-300 ease-in-out text-center items-center gap-2 justify-center ${
              location.pathname.includes(item.href)
                ? "bg-primary_dark_700 shadow-[inset_0_-3px_5px_1px_#F6F7FA33] rounded-md"
                : ""
            }`}
          >
            {item.icon}
            <div className="hidden lg:flex">{item.name}</div>
          </Link>
        ))}
      </div>
      <div
        className="h-[40px] rounded-md bg-[#17172E] flex flex-row items-center p-2 hover:cursor-pointer "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-[26px] h-[26px] bg-amber-200 rounded-md mr-2"></div>
        <div className="hidden sm:flex flex-col items-start mr-[16px]">
          <p className="text-xs md:text-sm xl:text-mx hover:text-white">
            Abdullayev Alisher
          </p>
          <p className="text-xxs text-secondary_light_400 hover:text-white">
            youremail@gmail.com
          </p>
        </div>
        <div className="hover:cursor-pointer hover:scale-125">
          <DropDownIcon />
        </div>
        {isOpen && (
          <div className="absolute w-[180px] z-200 bg-[#17172E] border border-secondary_dark_600 rounded-lg transition duration-300 translate-y-[84px] translate-x-3.5 p-1">
            {UserBtns.map((btn, idx) => (
              <div
                key={idx}
                className="flex flex-row items-center gap-3 text-sm p-2 cursor-pointer hover:bg-secondary_dark_900 rounded-md text-start h-[52px] text-secondary_light_100 group "
                onClick={() => {
                  btn.action();
                  setIsOpen(false);
                }}
              >
                <div className="p-2 rounded-md  bg-bg_gray_light group-hover:bg-primary_dark_700 transition duration-300 ease-in-out">
                  {btn.icon}
                </div>
                {btn.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
