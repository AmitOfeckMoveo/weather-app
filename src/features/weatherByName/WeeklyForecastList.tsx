export function WeeklyForecastList() {
  const mockForecast = [
    { date: "2025-12-25", day: { maxtemp_c: 19.0, mintemp_c: 15.2, condition: { text: "Sunny", icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" } } },
    { date: "2025-12-26", day: { maxtemp_c: 18.1, mintemp_c: 15.4, condition: { text: "Patchy rain", icon: "//cdn.weatherapi.com/weather/64x64/day/176.png" } } },
    { date: "2025-12-27", day: { maxtemp_c: 18.9, mintemp_c: 15.9, condition: { text: "Moderate rain", icon: "//cdn.weatherapi.com/weather/64x64/day/302.png" } } },
    { date: "2025-12-28", day: { maxtemp_c: 18.7, mintemp_c: 15.0, condition: { text: "Patchy rain", icon: "//cdn.weatherapi.com/weather/64x64/day/176.png" } } },
    { date: "2025-12-29", day: { maxtemp_c: 17.5, mintemp_c: 14.8, condition: { text: "Moderate rain", icon: "//cdn.weatherapi.com/weather/64x64/day/302.png" } } },
    { date: "2025-12-30", day: { maxtemp_c: 14.3, mintemp_c: 13.8, condition: { text: "Patchy rain", icon: "//cdn.weatherapi.com/weather/64x64/day/176.png" } } },
    { date: "2025-12-31", day: { maxtemp_c: 17.0, mintemp_c: 13.6, condition: { text: "Patchy rain", icon: "//cdn.weatherapi.com/weather/64x64/day/176.png" } } },
  ]

  const getDayName = (dateStr: string) => new Date(dateStr).toLocaleDateString("en-US", { weekday: "short" })

  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-xl font-semibold mb-4">7-Day Forecast</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
        {mockForecast.map((day, i) => (
          <div key={i} className="flex flex-col items-center p-4 rounded-lg border bg-card hover:bg-accent transition-colors">
            <div className="text-sm font-medium text-muted-foreground mb-2">{getDayName(day.date)}</div>
            <img src={`https:${day.day.condition.icon}`} alt={day.day.condition.text} className="w-12 h-12 mb-2" />
            <div className="text-lg font-semibold">{day.day.maxtemp_c}°C</div>
            <div className="text-sm text-muted-foreground">{day.day.mintemp_c}°C</div>
          </div>
        ))}
      </div>
    </div>
  )
}

