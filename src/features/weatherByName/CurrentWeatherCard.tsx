import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CurrentWeatherCard() {
  const mock = {
    location: { name: "Netanya", region: "HaMerkaz", country: "Israel" },
    current: {
      temp_c: 19.0,
      temp_f: 66.2,
      condition: { text: "Sunny", icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
      humidity: 43,
      wind_mph: 2.5,
      wind_kph: 4.0,
      pressure_mb: 1016.0,
      uv: 2.4,
    },
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-2xl">{mock.location.name}, {mock.location.region}</CardTitle>
        <p className="text-sm text-muted-foreground">{mock.location.country}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <img
            src={`https:${mock.current.condition.icon}`}
            alt={mock.current.condition.text}
            className="w-20 h-20"
          />
          <div>
            <div className="text-5xl font-bold">{mock.current.temp_c}°C</div>
            <div className="text-lg text-muted-foreground">{mock.current.condition.text}</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
          <div>
            <div className="text-sm text-muted-foreground">Humidity</div>
            <div className="text-xl font-semibold">{mock.current.humidity}%</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Wind</div>
            <div className="text-xl font-semibold">{mock.current.wind_kph} km/h</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Pressure</div>
            <div className="text-xl font-semibold">{mock.current.pressure_mb} hPa</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">UV Index</div>
            <div className="text-xl font-semibold">{mock.current.uv}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

