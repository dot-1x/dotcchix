"use client"
import { cn } from "@/lib/utils"

export default function LogStyle({
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
    <p className={cn(className)}>
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
    </p>
  )
}
