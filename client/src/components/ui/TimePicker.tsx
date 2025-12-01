"use client"

import { useState } from 'react'
import Image from "next/image" 
import IconeRelogio from "@/assets/icons/alarmIcon.svg"
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/label'
import { cn } from "@/lib/utils" 

interface TimePickerProps {
  className?: string;
  placeholder?: string;
}

export function TimePicker({ className, placeholder }: TimePickerProps) {
  const [time, setTime] = useState("00:00")

  return (
    <div className='relative w-full'>
      <Label htmlFor='time-picker' className='sr-only'>Time input</Label>
      <div className='relative w-full'>
        
        <Input
          type='time'
          id='time-picker'
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "bg-white pr-10 pl-3 text-base w-full appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none",
            time === "00:00" ? "text-gray-400" : "text-primary",
            className
          )}
        />

        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
          {}
          <Image 
            src={IconeRelogio} 
            alt="Ícone Relógio" 
            width={24} 
            height={24} 
            className="opacity-100" 
          />
        </div>

      </div>
    </div>
  )
}