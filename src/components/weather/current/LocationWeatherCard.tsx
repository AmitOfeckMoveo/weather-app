import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/Text"
import { useCurrentLocationWeather } from "@/hooks/useCurrentLocationWeather"
import { WeatherCard } from "./WeatherCard"
import { LoadingState } from "@/components/shared/LoadingState"
import { ErrorState } from "@/components/shared/ErrorState"

export function LocationWeatherCard() {
  const {
    weatherData,
    isLoading,
    error,
    getCurrentLocation,
    hasLocation,
  } = useCurrentLocationWeather()

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">Current Location</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!hasLocation && !isLoading && !error && (
          <div className="flex flex-col items-center gap-4 py-8">
            <Text size="sm" className="text-muted-foreground text-center">
              Get weather for your current location
            </Text>
            <Button onClick={getCurrentLocation}>Use My Location</Button>
          </div>
        )}

        {isLoading && (
          <LoadingState message={hasLocation ? "Loading weather..." : "Getting location..."} />
        )}

        {error && (
          <ErrorState message={error} />
        )}

        {weatherData && (
          <WeatherCard 
            location={weatherData.location}
            current={weatherData.current}
            size="sm"
          />
        )}
      </CardContent>
    </Card>
  )
}

