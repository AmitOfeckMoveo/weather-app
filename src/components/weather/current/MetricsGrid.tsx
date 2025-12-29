import { Container } from "@/components/ui/Container"
import type { CurrentWeather } from "@/types/weather"
import { Metric } from "./Metric"

interface MetricsGridProps {
  current: CurrentWeather
  size?: "sm" | "md" | "lg"
}

export function MetricsGrid({ current, size = "md" }: MetricsGridProps) {
  return (
    <Container
      variant="grid"
      gridColumns={size}
      gap="md"
      className="pt-4 border-t"
    >
      <Metric label="Humidity" value={current.humidity} unit="%" />
      <Metric label="Wind" value={current.wind_kph} unit="km/h" />
      <Metric label="Pressure" value={current.pressure_mb} unit="hPa" />
      <Metric label="UV Index" value={current.uv} />
    </Container>
  )
}

