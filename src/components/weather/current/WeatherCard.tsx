import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Location, CurrentWeather } from "@/types/weather"
import { LocationHeader } from "./LocationHeader"
import { TemperatureDisplay } from "./TemperatureDisplay"
import { MetricsGrid } from "./MetricsGrid"

interface WeatherCardProps {
  location: Location
  current: CurrentWeather
  size?: "sm" | "md" | "lg"
}

const sizeConfig = {
  sm: {
    card: "border-0 shadow-none bg-transparent",
    showHeader: false,
    contentPadding: "p-0",
  },
  md: {
    card: "max-w-2xl",
    showHeader: true,
    contentPadding: "space-y-4",
  },
  lg: {
    card: "max-w-4xl",
    showHeader: true,
    contentPadding: "space-y-6",
  },
}

export function WeatherCard({ 
  location, 
  current,
  size = "md"
}: WeatherCardProps) {
  const config = sizeConfig[size]

  return (
    <Card className={cn("w-full mx-auto", config.card)}>
      {config.showHeader && <LocationHeader location={location} />}
      <CardContent className={config.contentPadding}>
        <TemperatureDisplay current={current} size={size} />
        <MetricsGrid current={current} size={size} />
      </CardContent>
    </Card>
  )
}

