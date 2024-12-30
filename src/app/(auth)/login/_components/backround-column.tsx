import React from "react";
import { motion } from "framer-motion";
import { BackgroundCard } from "./backround-card";
import { columns } from "../page";

export function BackgroundColumn({ items, duration }: (typeof columns)[0]) {
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
