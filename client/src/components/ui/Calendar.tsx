"use client";

import * as React from "react";

type CalendarProps = {
  selected?: Date;
  mode?: "single" | "range";
  onSelect: (date: Date | undefined) => void;
  captionLayout?: "dropdown" | "buttons";
};

export function Calendar({ selected, onSelect }: CalendarProps) {
  const [currentDate, setCurrentDate] = React.useState<Date | undefined>(selected);

  const handleSelect = (date: Date) => {
    setCurrentDate(date);
    onSelect(date);
  };

  return (
    <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
      <input
        type="date"
        value={currentDate ? currentDate.toISOString().substring(0, 10) : ""}
        onChange={(e) => handleSelect(new Date(e.target.value))}
        style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
    </div>
  );
}
