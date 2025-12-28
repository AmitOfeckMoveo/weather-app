import { Text } from "@/components/ui/Text"
import type { ForecastDay } from "@/types/weather"
import { ForecastDayCard } from "./ForecastDayCard"

interface WeeklyForecastListProps {
  forecast: ForecastDay[]
}

export function WeeklyForecastList({ forecast }: WeeklyForecastListProps) {
  return (
    <div className="w-full max-w-4xl">
      <Text as="h2" size="xl" weight="bold" className="mb-4">
        7-Day Forecast
      </Text>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
        {forecast.map((day, i) => (
          <ForecastDayCard key={day.date || i} forecastDay={day} />
        ))}
      </div>
    </div>
  )
}
