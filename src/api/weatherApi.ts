import axios from "axios"
import type { WeatherResponse } from "@/types/weather"

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = "https://api.weatherapi.com/v1"

if (!API_KEY) {
  throw new Error(
    "VITE_WEATHER_API_KEY is not defined. Please create a .env file in the project root with: VITE_WEATHER_API_KEY=your_api_key"
  )
}

export interface FetchWeatherParams {
  cityName: string
  days?: number
}

export async function fetchWeatherByCity({
  cityName,
  days = 7,
}: FetchWeatherParams): Promise<WeatherResponse> {
  const response = await axios.get<WeatherResponse>(`${BASE_URL}/forecast.json`, {
    params: {
      key: API_KEY,
      q: cityName,
      days,
      aqi: "no",
      alerts: "no",
    },
  })
  return response.data
}

export interface FetchWeatherByLocationParams {
  lat: number
  lon: number
  days?: number
}

export async function fetchWeatherByLocation({
  lat,
  lon,
  days = 7,
}: FetchWeatherByLocationParams): Promise<WeatherResponse> {
  const response = await axios.get<WeatherResponse>(`${BASE_URL}/forecast.json`, {
    params: {
      key: API_KEY,
      q: `${lat},${lon}`,
      days,
      aqi: "no",
      alerts: "no",
    },
  })
  return response.data
}

