import { useState, useCallback } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchWeatherByLocation } from "@/api/weatherApi"

interface Coordinates {
  lat: number
  lon: number
}

export function useCurrentLocationWeather() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null)
  const [locationError, setLocationError] = useState<string | null>(null)
  const [isGettingLocation, setIsGettingLocation] = useState(false)

  const getCurrentLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser")
      return
    }

    setIsGettingLocation(true)
    setLocationError(null)

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
        setIsGettingLocation(false)
      },
      (error) => {
        setLocationError(error.message || "Failed to get location")
        setIsGettingLocation(false)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    )
  }, [])

  const { data: weatherData, isLoading: isLoadingWeather, error: weatherError } = useQuery({
    queryKey: ["weather", "current-location", coordinates?.lat, coordinates?.lon],
    queryFn: () => fetchWeatherByLocation({ lat: coordinates!.lat, lon: coordinates!.lon }),
    enabled: !!coordinates && !locationError,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })

  return {
    weatherData,
    isLoading: isGettingLocation || isLoadingWeather,
    error: locationError || (weatherError as Error | null)?.message || null,
    getCurrentLocation,
    hasLocation: !!coordinates,
  }
}

