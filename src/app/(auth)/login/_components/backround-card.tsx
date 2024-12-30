import React from "react";

import Image from "next/image";
import { cn } from "@/lib/utils";
import columns from "@/utils";

export function BackgroundCard({
  item,
}: {
  item: (typeof columns)[0]["items"][0];
}) {
  return (
    <div
      className={cn(
        "mb-4 overflow-hidden aspect-[4/5] rounded-lg p-4 backdrop-blur-sm",
        item.bgColor
      )}
    >
      <div
        className={cn(
          "mb-4 aspect-video rounded-md flex justify-center",
          item.logoColor,
          item.type === "profile" ? "items-end" : "items-center"
        )}
      >
        {item.type === "profile" ? (
          <div className="relative flex h-full w-[75%] items-end justify-center">
            <Image
              src={item.icon || "/placeholder.svg"}
              alt={item.title}
              fill
              className={cn(
                "object-contain h-full w-[75%]",
                "flex items-center justify-center"
              )}
            />
          </div>
        ) : (
          <Image
            src={item.icon}
            alt={item.title}
            width={80}
            height={80}
            className="flex items-end justify-center"
          />
        )}
      </div>
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-black text-center">
          {item.title}
        </h3>
        <p className="text-sm text-black/70 text-center">
          {item.type === "profile" ? item.quote : item.subtitle}
        </p>
      </div>
    </div>
  );
}
