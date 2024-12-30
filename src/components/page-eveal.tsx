'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const revealVariants = {
  initial: {
    scaleY: 1,
  },
  animate: {
    scaleY: 0,
  },
}

const revealTransition = {
  duration: 0.8,
  ease: [0.83, 0, 0.17, 1], // custom easing function
}

export default function PageReveal() {
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="animate"
      variants={revealVariants}
      transition={revealTransition}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000', // You can change this color
        transformOrigin: 'top',
        zIndex: 50,
      }}
    />
  )
}

