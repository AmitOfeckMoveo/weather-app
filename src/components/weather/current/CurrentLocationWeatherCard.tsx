import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/Text"
import { useCurrentLocationWeather } from "@/hooks/useCurrentLocationWeather"
import { CurrentWeatherCard } from "./CurrentWeatherCard"
import { LoadingState } from "@/components/shared/LoadingState"
import { ErrorState } from "@/components/shared/ErrorState"

export function CurrentLocationWeatherCard() {
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
          <div className="[&_>div]:border-0 [&_>div]:shadow-none [&_>div]:bg-transparent [&_>div]:p-0 [&_header]:hidden [&_img]:w-16 [&_img]:h-16 [&_.text-5xl]:text-3xl [&_.text-lg]:text-sm [&_.gap-4]:gap-3 [&_.grid]:grid-cols-2 [&_.max-w-2xl]:max-w-none">
            <CurrentWeatherCard 
              location={weatherData.location}
              current={weatherData.current}
            />
          </div>
        )}
      </CardContent>
    </Card>
  )
}

