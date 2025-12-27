import { useState, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { SearchCityInput } from "./components/search/SearchCityInput"
import { CurrentWeatherCard } from "./components/current/CurrentWeatherCard"
import { WeeklyForecastList } from "./components/forecast/WeeklyForecastList"
import { LoadingState } from "@/components/shared/LoadingState"
import { ErrorState } from "@/components/shared/ErrorState"
import { fetchWeatherByCity } from "@/api/weatherApi"
import { useRecentSearches } from "@/hooks/useRecentSearches"

interface WeatherByNameHomeProps {
  externalSearchQuery?: string | null
}

export function WeatherByNameHome({ externalSearchQuery }: WeatherByNameHomeProps) {
  const [cityName, setCityName] = useState("")
  const [searchQuery, setSearchQuery] = useState<string | null>(null)
  const { addSearch } = useRecentSearches()

  // Handle external search trigger
  useEffect(() => {
    if (externalSearchQuery) {
      setCityName(externalSearchQuery)
      setSearchQuery(externalSearchQuery)
    }
  }, [externalSearchQuery])

  const { data: weatherData, isLoading, error, refetch } = useQuery({
    queryKey: ["weather", searchQuery],
    queryFn: () => fetchWeatherByCity({ cityName: searchQuery! }),
    enabled: !!searchQuery && searchQuery.trim() !== "",
  })

  // Save to recent searches when search succeeds
  useEffect(() => {
    if (weatherData && searchQuery) {
      addSearch(searchQuery)
    }
  }, [weatherData, searchQuery, addSearch])

  const handleSearch = () => {
    if (cityName.trim()) {
      setSearchQuery(cityName.trim())
    }
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="w-full space-y-8">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-center">Weather App</h1>
          <SearchCityInput
            value={cityName}
            onChange={setCityName}
            onSearch={handleSearch}
          />
        </div>

        {isLoading && (
          <LoadingState message="Loading weather data..." />
        )}

        {error && (
          <ErrorState 
            message="Error loading weather data. Please try again."
            onRetry={() => refetch()}
          />
        )}

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

