import { useState, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { SearchCityInput } from "./search/SearchCityInput"
import { WeatherCard } from "./current/WeatherCard"
import { WeeklyForecastList } from "./forecast/WeeklyForecastList"
import { LoadingState } from "@/components/shared/LoadingState"
import { ErrorState } from "@/components/shared/ErrorState"
import { Container } from "@/components/ui/Container"
import { fetchWeatherByCity } from "@/api/weatherApi"

interface WeatherSearchProps {
  externalSearchQuery?: string | null
  onAddSearch: (cityName: string) => void
}

export function WeatherSearch({ externalSearchQuery, onAddSearch }: WeatherSearchProps) {
  const [cityName, setCityName] = useState("")
  const [searchQuery, setSearchQuery] = useState<string | null>(null)

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
      onAddSearch(searchQuery)
    }
  }, [weatherData, searchQuery, onAddSearch])

  const handleSearch = () => {
    if (cityName.trim()) {
      setSearchQuery(cityName.trim())
    }
  }

  return (
    <Container variant="default" spacing="lg" width="full">
      <SearchCityInput
        value={cityName}
        onChange={setCityName}
        onSearch={handleSearch}
      />

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
          <WeatherCard 
            location={weatherData.location}
            current={weatherData.current}
          />
          
          <WeeklyForecastList forecast={weatherData.forecast.forecastday} />
        </>
      )}
    </Container>
  )
}

