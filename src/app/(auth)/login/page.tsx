"use client";

import Image from "next/image";
import { BackgroundColumn } from "./_components/backround-column";
import { LoginForm } from "./_components/login-form";

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

const columns = [
  {
    items: [
      {
        type: "logo",
        icon: "/Flatfile.png",
        logoColor: "bg-[#FEE4CB]",
        bgColor: "bg-gradient-to-b from-white to-orange-50",
        title: "Flatfile",
        subtitle: "Project Management",
      },
      {
        type: "profile",
        icon: "/Ariana.png",
        logoColor: "bg-[#242059]",
        bgColor: "bg-white",
        title: "Ariana",
        quote: "We automatically resolve 25% of customer queries.",
      },
      {
        type: "logo",
        icon: "/Namecheap.png",
        logoColor: "bg-[#FF5301]",
        bgColor: "bg-gradient-to-b from-white to-red-200",
        title: "Name Cheap",
        subtitle: "Project Management",
      },
    ],
    duration: 35,
  },
  {
    items: [
      {
        type: "logo",
        icon: "/Chatgpt.png",
        logoColor: "bg-[#10A37F]",
        bgColor: "bg-gradient-to-b from-white to-green-100",
        title: "ChatGPT",
        subtitle: "Project Management",
      },
      {
        type: "profile",
        icon: "/Kate.png",
        logoColor: "bg-[#D2B7FF]",
        bgColor: "bg-white",
        title: "Kate",
        quote:
          "“We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.”",
      },
      {
        type: "logo",
        icon: "/QB.png",
        logoColor: "bg-[#2CA01C]",
        bgColor: "bg-gradient-to-b from-white to-green-100",
        title: "QB",
        subtitle: "Project Management",
      },
    ],
    duration: 45,
  },
  {
    items: [
      {
        type: "logo",
        icon: "/Notion.png",
        logoColor: "bg-black",
        bgColor: "bg-gradient-to-b from-white to-gray-300",
        title: "Notion",
        subtitle: "Project Management",
      },
      {
        type: "profile",
        icon: "/Andrew.png",
        logoColor: "bg-[#242059]",
        bgColor: "bg-white",
        title: "Andrew",
        quote:
          "“We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.”",
      },
      {
        type: "logo",
        icon: "/Skype.png",
        logoColor: "bg-[#0098E3]",
        bgColor: "bg-gradient-to-b from-white to-cyan-100",
        title: "Skype",
        subtitle: "Project Management",
      },
    ],
    duration: 55,
  },
  {
    items: [
      {
        type: "logo",
        icon: "/Linkedin.png",
        logoColor: "bg-[#0A66C2]",
        bgColor: "bg-gradient-to-b from-white to-blue-200",
        title: "LinkedIn",
        subtitle: "Project Management",
      },
      {
        type: "profile",
        icon: "/Paul.png",
        logoColor: "bg-[#595959]",
        bgColor: "bg-white",
        title: "Paul",
        quote:
          "“We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.”",
      },
      {
        type: "logo",
        icon: "/AWS.png",
        logoColor: "bg-[#262E3B]",
        bgColor: "bg-gradient-to-b from-white to-gray-400",
        title: "AWS",
        subtitle: "Project Management",
      },
    ],
    duration: 45,
  },
  {
    items: [
      {
        type: "logo",
        icon: "/Canva.png",
        logoColor: "bg-[#24BECA]",
        bgColor: "bg-gradient-to-b from-white to-teal-100",
        title: "Canva",
        subtitle: "Project Management",
      },
      {
        type: "profile",
        icon: "/Jane.png",
        logoColor: "bg-[#FF9CA8]",
        bgColor: "bg-white",
        title: "Jane Mary",
        quote:
          "“We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.”",
      },
      {
        type: "logo",
        icon: "/Chimp.png",
        logoColor: "bg-[#FFE002]",
        bgColor: "bg-gradient-to-b from-white to-yellow-100",
        title: "Chimp Monk",
        subtitle: "Project Management",
      },
    ],
    duration: 35,
  },
];
