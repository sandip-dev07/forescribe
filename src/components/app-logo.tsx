import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const AppLogo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Image src="/logo.svg" alt="Forescribe" width={16} height={16} />
      <span className="text-xl font-medium ">forescribe</span>
    </div>
  );
};

export default AppLogo;
