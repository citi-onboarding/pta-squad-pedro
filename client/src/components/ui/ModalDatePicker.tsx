'use client'

import { useState } from 'react'
import Image from "next/image" 
import IconeCalendario from "@/assets/calendar_month.svg"
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/Calendar'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover'
import { cn } from "@/lib/utils"

function formatDate(date: Date | undefined) {
  if (!date) return ''
  return date.toLocaleDateString('pt-Br', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

function isValidDate(date: Date | undefined) {
  if (!date) return false
  return !isNaN(date.getTime())
}

interface ModalDatePickerProps {
  className?: string;
  placeholder?: string;
}

export const ModalDatePicker = ({ className, placeholder }: ModalDatePickerProps) => {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [value, setValue] = useState(formatDate(date))

  return (
    <div className="relative w-full">
      <Label htmlFor='date' className='sr-only'>
        Date picker
      </Label>
    
      <Popover open={open} onOpenChange={setOpen}>
        <div className='relative w-full'>
          <Input
            id='date'
            value={value}
            placeholder={placeholder || 'DD/MM/AAAA'}
            className={cn(
               "bg-white pr-10 text-base placeholder:text-gray-400 w-full", 
               className
            )}
            onChange={e => {
              const dateStr = e.target.value
              setValue(dateStr)
              const dateObj = new Date(dateStr)
              if (isValidDate(dateObj)) {
                setDate(dateObj)
              }
            }}
            onKeyDown={e => {
              if (e.key === 'ArrowDown') {
                e.preventDefault()
                setOpen(true)
              }
            }}
          />

          <PopoverTrigger onClick={() => setOpen(!open)}>
            <Button 
              id='date-picker' 
              variant='ghost' 
              className='absolute top-0 right-0 h-full px-3 hover:bg-transparent'
              type="button"
            >
              <Image 
                src={IconeCalendario} 
                alt="Ícone Calendário" 
                width={20} 
                height={20} 
                className="opacity-100" 
              />
              <span className='sr-only'>Escolher data</span>
            </Button>
          </PopoverTrigger>

          {open && (
            <PopoverContent className='w-auto p-0 right-0'>
              <Calendar
                selected={date}
                onSelect={(newDate) => {
                  setDate(newDate)
                  setValue(formatDate(newDate))
                  setOpen(false)
                }}
              />
            </PopoverContent>
          )}
        </div>
      </Popover>
    </div>
  )
}