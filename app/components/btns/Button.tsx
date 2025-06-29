"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Button = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <div className="flex gap-2 md:gap-4">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link key={item.name} href={item.href}>
            <button
              className={`text-sm md:text-base px-2 py-1 md:px-4 md:py-2 rounded-md transition-all font-medium border-b-2 ${
                isActive
                  ? "text-white border-yellow-400"
                  : "text-gray-400 border-transparent hover:text-white"
              } cursor-pointer hover:bg-gray-700`}
            >
              {item.name}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default Button;
