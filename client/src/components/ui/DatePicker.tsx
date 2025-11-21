"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverTrigger, PopoverContent } from "./Popover"
import { Calendar } from "./Calendar"

export function DatePicker() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <div
      className="flex flex-col gap-3 w-{126px} h-14 rounded-{8px} border-{#D9D9D9} py-4 px-3"
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger onClick={() => setOpen(!open)}>
          <Button
            variant="outline"
            id="date"
            className="w-full justify-between font-normal h-full"
          >
            {date ? date.toLocaleDateString() : "dd/mm/aa"}
            
          </Button>
        </PopoverTrigger>

        {open && (
          <PopoverContent className="w-auto p-0 min-w-[126px]">
            <Calendar
              selected={date}
              onSelect={(date) => {
                setDate(date)
                setOpen(false)
              }}
            />
          </PopoverContent>
        )}
      </Popover>
    </div>
  )
}
