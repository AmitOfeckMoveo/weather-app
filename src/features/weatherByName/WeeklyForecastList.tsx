import type { ForecastDay } from "./types"

interface WeeklyForecastListProps {
  forecast: ForecastDay[]
}

export function WeeklyForecastList({ forecast }: WeeklyForecastListProps) {
  const getDayName = (dateStr: string) => 
    new Date(dateStr).toLocaleDateString("en-US", { weekday: "short" })

  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-xl font-semibold mb-4">7-Day Forecast</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
        {forecast.map((day, i) => (
          <div key={i} className="flex flex-col items-center p-4 rounded-lg border bg-card hover:bg-accent transition-colors">
            <div className="text-sm font-medium text-muted-foreground mb-2">
              {getDayName(day.date)}
            </div>
            <img
              src={`https:${day.day.condition.icon}`}
              alt={day.day.condition.text}
              className="w-12 h-12 mb-2"
            />
            <div className="text-lg font-semibold">{day.day.maxtemp_c}°C</div>
            <div className="text-sm text-muted-foreground">{day.day.mintemp_c}°C</div>
          </div>
        ))}
      </div>
    </div>
  )
}

