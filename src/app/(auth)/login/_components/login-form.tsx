import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  return (
    <div className="w-full max-w-md space-y-6 sm:space-y-8 rounded-xl bg-black/20 p-6 sm:p-8 backdrop-blur-xl">
      <div className="mx-auto flex items-center justify-center gap-2">
        <Image src="/logo.svg" alt="Forescribe" width={18} height={18} />
      </div>

      <h1 className="text-center text-xl sm:text-2xl font-medium text-white">
        Welcome to Forescribe
      </h1>

      {/* Login buttons */}
      <div className="space-y-4">
        <Button
          variant="default"
          className="relative w-full py-2 sm:py-3 text-sm sm:text-base bg-[#8B3DFF] hover:bg-[#8B3DFF]/90"
        >
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Continue with Google
        </Button>
        <Button
          variant="secondary"
          className="relative w-full py-2 sm:py-3 text-sm sm:text-base bg-zinc-700/50 text-white hover:bg-zinc-700/70"
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 3H11V11H3V3Z" fill="white" />
            <path d="M3 13H11V21H3V13Z" fill="white" />
            <path d="M13 3H21V11H13V3Z" fill="white" />
            <path d="M13 13H21V21H13V13Z" fill="white" />
          </svg>
          Continue with Microsoft
        </Button>
      </div>
    </div>
  );
}
