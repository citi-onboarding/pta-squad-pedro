"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export default function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <div className="flex">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "border border-[#101010] w-[520px] h-[50px] rounded-[8px] px-3 text-base outline-none",
          className
        )}
        {...props}
      />
    </div>
  )
}

export { Input }