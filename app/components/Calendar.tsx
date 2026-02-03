"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface CalendarCardProps {
  selectedDate?: Date;
  onDateSelect: (date: Date) => void;
  isLoading?: boolean;
}

export default function CalendarCard({
  selectedDate,
  onDateSelect,
  isLoading,
}: CalendarCardProps) {
  const today = new Date();
  console.log('drfghjk,.')

  return (
    <div className="w-full max-w-sm rounded-lg border bg-card p-4 shadow-sm">
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={(date) => {
          if (date) {
            onDateSelect(date);
          }
        }}
        disabled={[
          { after: today }, // 🚫 disable future dates
        ]}
      />
    </div>
  );
}
