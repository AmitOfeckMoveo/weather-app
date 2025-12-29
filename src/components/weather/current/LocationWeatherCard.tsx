import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/Text"
import { useCurrentLocationWeather } from "@/hooks/useCurrentLocationWeather"
import { WeatherCard } from "./WeatherCard"
import { QueryState } from "@/components/shared/QueryState"

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
        <QueryState
          isLoading={isLoading}
          error={error}
          data={weatherData}
          loadingMessage={hasLocation ? "Loading weather..." : "Getting location..."}
          showEmptyWhen={!hasLocation}
          emptyState={
            <div className="flex flex-col items-center gap-4 py-8">
              <Text size="sm" className="text-muted-foreground text-center">
                Get weather for your current location
              </Text>
              <Button onClick={getCurrentLocation}>Use My Location</Button>
            </div>
          }
        >
          {weatherData && (
            <WeatherCard 
              location={weatherData.location}
              current={weatherData.current}
              size="sm"
            />
          )}
        </QueryState>
      </CardContent>
    </Card>
  )
}

