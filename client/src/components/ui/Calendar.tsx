"use client"

import * as React from "react"

type CalendarProps = {
  selected?: Date
  onSelect: (date: Date) => void
}

export function Calendar({ selected, onSelect }: CalendarProps) {
  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ]

  const [currentDate, setCurrentDate] = React.useState(new Date())

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const monthName = monthNames[month]

  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const goToPreviousMonth = () => {
    const prevMonth = new Date(year, month - 1, 1)
    setCurrentDate(prevMonth)
  }

  const goToNextMonth = () => {
    const nextMonth = new Date(year, month + 1, 1)
    setCurrentDate(nextMonth)
  }

  return (
    <div className="p-2 w-80">
      <div className="flex justify-between items-center mb-2 font-medium">
        <button onClick={goToPreviousMonth} className="px-2 py-1 rounded hover:bg-gray-200">
          &lt;
        </button>
        <div>{monthName} {year}</div>
        <button onClick={goToNextMonth} className="px-2 py-1 rounded hover:bg-gray-200">
          &gt;
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-1 text-center font-semibold text-xs text-gray-500">
        <div>Dom</div>
        <div>Seg</div>
        <div>Ter</div>
        <div>Qua</div>
        <div>Qui</div>
        <div>Sex</div>
        <div>Sáb</div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: new Date(year, month, 1).getDay() }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {days.map((day) => {
          const date = new Date(year, month, day)
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
    </div>
  )
}
