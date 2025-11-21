"use client"

import * as React from "react"

type PopoverProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

export function Popover({ open, onOpenChange, children }: PopoverProps) {
  return <div className="relative">{children}</div>
}

type PopoverTriggerProps = {
  children: React.ReactNode
  onClick?: () => void
}

export function PopoverTrigger({ children, onClick }: PopoverTriggerProps) {
  return <div onClick={onClick}>{children}</div>
}

type PopoverContentProps = {
  children: React.ReactNode
  className?: string
}

export function PopoverContent({ children, className }: PopoverContentProps) {
  return (
    <div className={`absolute z-50 mt-2 bg-white border rounded shadow ${className}`}>
      {children}
    </div>
  )
}
