import React from "react";
import AppLogo from "@/components/app-logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className="h-16 fixed top-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[75%] rounded-lg border flex items-center justify-between px-4 sm:px-6 lg:px-8">
      <AppLogo />
      <div className="flex items-center gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm leading-6 text-gray-900"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <Link href="/login">
        <Button size={"sm"} className="bg-[#8B3DFF] hover:bg-[#8B3DFF]/90 ">
          Login
        </Button>
      </Link>
    </div>
  );
};

export default Navbar;
