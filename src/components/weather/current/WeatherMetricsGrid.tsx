import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/Container"
import type { CurrentWeather } from "@/types/weather"
import { WeatherMetric } from "./WeatherMetric"

interface WeatherMetricsGridProps {
  current: CurrentWeather
  size?: "sm" | "md" | "lg"
}

const sizeConfig = {
  sm: {
    grid: "grid-cols-2",
  },
  md: {
    grid: "grid-cols-2 md:grid-cols-4",
  },
  lg: {
    grid: "grid-cols-4",
  },
}

export function WeatherMetricsGrid({ current, size = "md" }: WeatherMetricsGridProps) {
  const config = sizeConfig[size]

  return (
    <Container
      variant="default"
      className={cn("grid gap-4 pt-4 border-t", config.grid)}
    >
      <WeatherMetric label="Humidity" value={current.humidity} unit="%" />
      <WeatherMetric label="Wind" value={current.wind_kph} unit="km/h" />
      <WeatherMetric label="Pressure" value={current.pressure_mb} unit="hPa" />
      <WeatherMetric label="UV Index" value={current.uv} />
    </Container>
  )
}
