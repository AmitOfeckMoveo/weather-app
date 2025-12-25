import { useState } from "react"
import { SearchCityInput } from "./SearchCityInput"
import { CurrentWeatherCard } from "./CurrentWeatherCard"
import { WeeklyForecastList } from "./WeeklyForecastList"
import type { WeatherResponse } from "./types"

// Mock data for testing UI
const MOCK_WEATHER_DATA: WeatherResponse = {
  location: {
    name: "Netanya",
    region: "HaMerkaz",
    country: "Israel",
    localtime: "2025-12-25 13:28"
  },
  current: {
    temp_c: 19.0,
    temp_f: 66.2,
    condition: {
      text: "Sunny",
      icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
      code: 1000
    },
    humidity: 43,
    wind_mph: 2.5,
    wind_kph: 4.0,
    pressure_mb: 1016.0,
    uv: 2.4
  },
  forecast: {
    forecastday: [
      {
        date: "2025-12-25",
        day: {
          maxtemp_c: 19.0,
          maxtemp_f: 66.2,
          mintemp_c: 15.2,
          mintemp_f: 59.4,
          condition: {
            text: "Sunny",
            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
            code: 1000
          }
        }
      },
      {
        date: "2025-12-26",
        day: {
          maxtemp_c: 18.1,
          maxtemp_f: 64.7,
          mintemp_c: 15.4,
          mintemp_f: 59.8,
          condition: {
            text: "Patchy rain nearby",
            icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
            code: 1063
          }
        }
      },
      {
        date: "2025-12-27",
        day: {
          maxtemp_c: 20.5,
          maxtemp_f: 68.9,
          mintemp_c: 16.0,
          mintemp_f: 60.8,
          condition: {
            text: "Partly Cloudy",
            icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
            code: 1003
          }
        }
      },
      {
        date: "2025-12-28",
        day: {
          maxtemp_c: 17.8,
          maxtemp_f: 64.0,
          mintemp_c: 14.5,
          mintemp_f: 58.1,
          condition: {
            text: "Cloudy",
            icon: "//cdn.weatherapi.com/weather/64x64/day/119.png",
            code: 1006
          }
        }
      },
      {
        date: "2025-12-29",
        day: {
          maxtemp_c: 21.2,
          maxtemp_f: 70.2,
          mintemp_c: 16.5,
          mintemp_f: 61.7,
          condition: {
            text: "Sunny",
            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
            code: 1000
          }
        }
      },
      {
        date: "2025-12-30",
        day: {
          maxtemp_c: 19.5,
          maxtemp_f: 67.1,
          mintemp_c: 15.8,
          mintemp_f: 60.4,
          condition: {
            text: "Clear",
            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
            code: 1000
          }
        }
      },
      {
        date: "2025-12-31",
        day: {
          maxtemp_c: 18.9,
          maxtemp_f: 66.0,
          mintemp_c: 15.0,
          mintemp_f: 59.0,
          condition: {
            text: "Sunny",
            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
            code: 1000
          }
        }
      }
    ]
  }
}

export function WeatherByNameHome() {
  const [cityName, setCityName] = useState("")
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(MOCK_WEATHER_DATA)

  const handleSearch = () => {
    if (cityName.trim()) {
      console.log("Searching for city:", cityName.trim())
      // TODO: API call will go here
      // TEMPORARY: Using mock data to see UI
      setWeatherData(MOCK_WEATHER_DATA)
    }
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-center">Weather App</h1>
          <SearchCityInput
            value={cityName}
            onChange={setCityName}
            onSearch={handleSearch}
          />
        </div>
        
        {weatherData && (
          <>
            <div className="flex justify-center">
              <CurrentWeatherCard 
                location={weatherData.location}
                current={weatherData.current}
              />
            </div>
            
            <div className="flex justify-center">
              <WeeklyForecastList forecast={weatherData.forecast.forecastday} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

