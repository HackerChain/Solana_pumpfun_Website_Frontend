import { Link, useLocation } from "react-router-dom";
import {
  AssetsIcon,
  DashboardIcon,
  LogoIcon,
  SettingsIcon,
  TransactionIcon,
} from "../../assets";

const navigation = [
  { name: "Dashboard", href: "/", icon: <DashboardIcon /> },
  { name: "Transaction", href: "/transactions", icon: <TransactionIcon /> },
  { name: "Assets", href: "/assets", icon: <AssetsIcon /> },
  { name: "Settings", href: "/settings", icon: <SettingsIcon /> },
];

export default function Header() {
  const location = useLocation();

  return (
    <div className="w-full items-center justify-between flex mb-6 h-[100px] px-[30px]">
      <div className="flex flex-row gap-2 mt-2 items-center">
        <LogoIcon />
        Pumpfun
      </div>
      <div className="flex justify-between w-[475px] h-[40px]">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`w-[123px] inline-flex px-4 text-sm text-secondary_light_300 hover:text-white transition-all duration-300 ease-in-out text-center items-center gap-2 justify-center ${
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
    </div>
  );
}
