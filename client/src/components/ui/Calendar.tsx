"use client"

import * as React from "react"

type CalendarProps = {
  selected?: Date
  onSelect: (date: Date) => void
}

export function Calendar({ selected, onSelect }: CalendarProps) {
  const today = new Date()
  const days = Array.from({ length: 30 }, (_, i) => i + 1)

  return (
    <div className="grid grid-cols-7 gap-1 p-2">
      {days.map((day) => {
        const date = new Date(today.getFullYear(), today.getMonth(), day)
        const isSelected = selected?.toDateString() === date.toDateString()
        return (
          <button
            key={day}
            onClick={() => onSelect(date)}
            className={`w-8 h-8 rounded ${isSelected ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
          >
            {day}
          </button>
        )
      })}
    </div>
  )
}