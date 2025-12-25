import type { ForecastDay } from "./types"
import { ForecastDayCard } from "./ForecastDayCard"

interface WeeklyForecastListProps {
  forecast: ForecastDay[]
}

export function WeeklyForecastList({ forecast }: WeeklyForecastListProps) {
  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-xl font-semibold mb-4">7-Day Forecast</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
        {forecast.map((day, i) => (
          <ForecastDayCard key={day.date || i} forecastDay={day} />
        ))}
      </div>
    </div>
  )
}

