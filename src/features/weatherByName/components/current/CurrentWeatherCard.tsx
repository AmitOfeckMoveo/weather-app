import { Card, CardContent } from "@/components/ui/card"
import type { Location, CurrentWeather } from "../../types"
import { LocationHeader } from "./LocationHeader"
import { TemperatureDisplay } from "./TemperatureDisplay"
import { WeatherMetricsGrid } from "./WeatherMetricsGrid"

interface CurrentWeatherCardProps {
  location: Location
  current: CurrentWeather
}

export function CurrentWeatherCard({ location, current }: CurrentWeatherCardProps) {
  return (
    <Card className="w-full max-w-2xl">
      <LocationHeader location={location} />
      <CardContent className="space-y-4">
        <TemperatureDisplay current={current} />
        <WeatherMetricsGrid current={current} />
      </CardContent>
    </Card>
  )
}

