import { Container } from "@/components/ui/Container"
import type { CurrentWeather } from "@/types/weather"
import { WeatherMetric } from "./WeatherMetric"

interface WeatherMetricsGridProps {
  current: CurrentWeather
  size?: "sm" | "md" | "lg"
}

export function WeatherMetricsGrid({ current, size = "md" }: WeatherMetricsGridProps) {
  return (
    <Container
      variant="grid"
      gridColumns={size}
      gap="md"
      className="pt-4 border-t"
    >
      <WeatherMetric label="Humidity" value={current.humidity} unit="%" />
      <WeatherMetric label="Wind" value={current.wind_kph} unit="km/h" />
      <WeatherMetric label="Pressure" value={current.pressure_mb} unit="hPa" />
      <WeatherMetric label="UV Index" value={current.uv} />
    </Container>
  )
}
