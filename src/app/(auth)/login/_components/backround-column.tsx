import React from "react";
import { motion } from "framer-motion";
import { BackgroundCard } from "./backround-card";
import { ColumnProps } from "@/types";

export function BackgroundColumn({ items, duration }: ColumnProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-50%" }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration,
        ease: "linear",
      }}
      className="flex flex-col px-1 sm:px-2"
    >
      {[...items, ...items].map((item, i) => (
        <BackgroundCard key={`${item.title}-${i}`} item={item} />
      ))}
    </motion.div>
  );
}
