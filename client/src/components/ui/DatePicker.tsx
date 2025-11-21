<<<<<<< HEAD
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
=======
"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "src/components/ui/button";
import { Calendar } from "src/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function DatePicker() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <div style={{ width: "126px", height: "56px", borderRadius:"8px" }}>
>>>>>>> imagens
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger onClick={() => setOpen(!open)}>
          <Button
            variant="outline"
<<<<<<< HEAD
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
=======
            className="w-full justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : "dd/mm/aa"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(selectedDate: Date | undefined) => {
              setDate(selectedDate);
              setOpen(false);
            }}
          />
        </PopoverContent>
>>>>>>> imagens
      </Popover>
    </div>
  );
}
<<<<<<< HEAD
=======

export { DatePicker };
>>>>>>> imagens
