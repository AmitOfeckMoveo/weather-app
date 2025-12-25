import { Card, CardContent } from "@/components/ui/card"
import type { ForecastDay } from "./types"

interface ForecastDayCardProps {
  forecastDay: ForecastDay
}

export function ForecastDayCard({ forecastDay }: ForecastDayCardProps) {
  const getDayName = (dateStr: string) => 
    new Date(dateStr).toLocaleDateString("en-US", { weekday: "short" })

  return (
    <Card className="flex flex-col items-center p-4 hover:bg-accent transition-colors">
      <CardContent className="flex flex-col items-center p-0 space-y-2">
        <div className="text-sm font-medium text-muted-foreground">
          {getDayName(forecastDay.date)}
        </div>
        <img
          src={`https:${forecastDay.day.condition.icon}`}
          alt={forecastDay.day.condition.text}
          className="w-12 h-12"
        />
        <div className="text-lg font-semibold">{forecastDay.day.maxtemp_c}°C</div>
        <div className="text-sm text-muted-foreground">{forecastDay.day.mintemp_c}°C</div>
      </CardContent>
    </Card>
  )
}

