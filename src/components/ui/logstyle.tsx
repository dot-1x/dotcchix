"use client"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import React from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger delay between children
    },
  },
}

// Variants for each item
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function LogParent({ children }: { children: React.ReactNode }) {
  return (
    <motion.div animate="visible" initial="hidden" variants={containerVariants}>
      {children}
    </motion.div>
  )
}
export function LogStyle({
  children,
  logname,
  logtype,
  className,
}: {
  children: React.ReactNode
  logname: string
  logtype: string
  className?: string
}) {
  const staticTime = new Date()
  return (
    <motion.div className={cn("text-white", className)} variants={itemVariants}>
      <span>
        [<span className="text-white">{logname}</span> |{" "}
        <span className="text-green-300">{logtype}</span>]{" "}
      </span>
      {children}{" "}
      <span className="text-white">
        @{" "}
        {staticTime.toLocaleString("en-US", {
          hour12: false,
        })}
      </span>
    </motion.div>
  )
}
