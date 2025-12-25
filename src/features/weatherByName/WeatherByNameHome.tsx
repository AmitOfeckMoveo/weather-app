import { SearchCityInput } from "./SearchCityInput"
import { CurrentWeatherCard } from "./CurrentWeatherCard"
import { WeeklyForecastList } from "./WeeklyForecastList"

export function WeatherByNameHome() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-center">Weather App</h1>
          <SearchCityInput />
        </div>
        
        <div className="flex justify-center">
          <CurrentWeatherCard />
        </div>
        
        <div className="flex justify-center">
          <WeeklyForecastList />
        </div>
      </div>
    </div>
  )
}

