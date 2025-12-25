import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Location, CurrentWeather } from "./types"

interface CurrentWeatherCardProps {
  location: Location
  current: CurrentWeather
}

export function CurrentWeatherCard({ location, current }: CurrentWeatherCardProps) {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-2xl">
          {location.name}, {location.region}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{location.country}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <img
            src={`https:${current.condition.icon}`}
            alt={current.condition.text}
            className="w-20 h-20"
          />
          <div>
            <div className="text-5xl font-bold">{current.temp_c}°C</div>
            <div className="text-lg text-muted-foreground">
              {current.condition.text}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
          <div>
            <div className="text-sm text-muted-foreground">Humidity</div>
            <div className="text-xl font-semibold">{current.humidity}%</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Wind</div>
            <div className="text-xl font-semibold">{current.wind_kph} km/h</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Pressure</div>
            <div className="text-xl font-semibold">{current.pressure_mb} hPa</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">UV Index</div>
            <div className="text-xl font-semibold">{current.uv}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

