import axios from "axios"
import type { WeatherResponse } from "@/features/weatherByName/types"

const API_KEY = "2d8dcdf576244cdfaf8112534252512"
const BASE_URL = "https://api.weatherapi.com/v1"

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

