import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AssetsIcon,
  DashboardIcon,
  DropDownIcon,
  LogoIcon,
  SettingsIcon,
  TransactionIcon,
} from "../../assets";
import { useState } from "react";
import api from "../../utils/api";
import { useAuth } from "../../context/Auth";

const navigation = [
  { name: "Dashboard", href: "/", icon: <DashboardIcon /> },
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
    api.post("/auth/logout").then((res) => {
      if (res.status === 200) {
        navigate("/signin");
      }
    });
  };

  const UserBtns = [
    {
      title: "My Account",
      icon: <DropDownIcon />,
      action: () => {
        console.log("My Account");
      },
    },
    {
      title: "Sign Out",
      icon: <DropDownIcon />,
      action: handleLogout,
    },
  ];

  return (
    <div className="w-full items-center justify-between flex mb-3 h-[60px] bg-bg_black">
      <div className="flex flex-row gap-2 mt-2 items-center text-white">
        <LogoIcon />
        Pumpfun
      </div>
      <div className="flex justify-between w-[475px] h-[40px]">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`px-4 inline-flex text-sm text-secondary_light_300 hover:text-white transition-all duration-300 ease-in-out text-center items-center gap-2 justify-center ${
              location.pathname === item.href
                ? "bg-primary_dark_700 shadow-[inset_0_-3px_5px_1px_#F6F7FA33] rounded-md "
                : ""
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </div>
      <div
        className="h-[40px] rounded-md bg-[#17172E] flex flex-row items-center p-2 hover:cursor-pointer hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* // TODO: Add dropdown menu */}
        <div className="w-[26px] h-[26px] bg-amber-200 rounded-md"></div>
        <div className="flex flex-col items-start mr-[16px] ml-2">
          <p className="text-mx">Abdullayev Alisher</p>
          <p className="text-xxs text-secondary_light_400">
            youremail@gmail.com
          </p>
        </div>
        <div className="hover:cursor-pointer hover:scale-125">
          <DropDownIcon />
        </div>
        {isOpen && (
          <div className="absolute w-[200px] z-200 bg-[#17172E] border border-secondary_dark_600 rounded-md shadow-lg transition translate-y-[64px] translate-x-3">
            {UserBtns.map((btn, idx) => (
              <div
                key={idx}
                className="px-4 py-2 cursor-pointer hover:bg-[#25254b] rounded-md text-start"
                onClick={() => {
                  btn.action();
                  setIsOpen(false);
                }}
              >
                {btn.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
