import type { CurrentWeather } from "../../types"
import { WeatherMetric } from "./WeatherMetric"

interface WeatherMetricsGridProps {
  current: CurrentWeather
}

export function WeatherMetricsGrid({ current }: WeatherMetricsGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
      <WeatherMetric label="Humidity" value={current.humidity} unit="%" />
      <WeatherMetric label="Wind" value={current.wind_kph} unit="km/h" />
      <WeatherMetric label="Pressure" value={current.pressure_mb} unit="hPa" />
      <WeatherMetric label="UV Index" value={current.uv} />
    </div>
  )
}

