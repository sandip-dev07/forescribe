"use client";

import Image from "next/image";
import { BackgroundColumn } from "./_components/backround-column";
import { LoginForm } from "./_components/login-form";
import columns from "@/utils";



export default function LoginPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0B0B14] px-4 sm:px-6 lg:px-8">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-80">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 h-[200vh]">
          {columns.map((column, i) => (
            <div
              key={i}
              className={`
                ${i >= 2 ? "hidden sm:block" : ""}
                ${i >= 4 ? "hidden lg:block" : ""}
              `}
            >
              <BackgroundColumn {...column} />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br  from-black via-[#000]/80 to-[#8B3DFF]/90" />

      <div className="relative z-10 flex flex-col min-h-screen items-center justify-center">
        {/* Logo */}
        <div className="w-full absolute top-4 left-4 sm:left-6 lg:left-8 pt-4 sm:pt-6">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Forescribe" width={18} height={18} />
            <span className="text-xl font-medium text-white">forescribe</span>
          </div>
        </div>
        <LoginForm />
        {/* Terms and Privacy */}
        <div className="text-start max-w-md mt-8 text-sm text-white/80">
          By clicking &quot;Continue with Google/Microsoft&quot; above, you
          acknowledge that you have read and understood, and agree to
          Forescribe&apos;s{" "}
          <a href="#" className="text-[#8B3DFF] hover:underline">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#8B3DFF] hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </main>
  );
}
