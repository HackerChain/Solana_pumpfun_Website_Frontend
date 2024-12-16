import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Transactions", href: "/transactions" },
  { name: "Assets", href: "/assets" },
  { name: "Settings", href: "/settings" },
];

export default function Header() {
  const location = useLocation();

  return (
    <div className="w-full items-center justify-center flex mb-6">
      <div className="bg-bg_black h-12 w-full justify-between flex px-32">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`inline-flex w-[120px] px-1 pt-1 text-lg hover:text-white transition-all duration-300 ease-in-out text-center items-center justify-center ${
              location.pathname === item.href
                ? "border-b-[1px] border-white text-text_activate"
                : "border-b-[1px] border-transparent text-text_deactivate"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
