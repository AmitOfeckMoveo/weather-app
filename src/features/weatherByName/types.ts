export interface WeatherCondition {
  text: string
  icon: string
  code: number
}

export interface Location {
  name: string
  region: string
  country: string
  localtime: string
}

export interface CurrentWeather {
  temp_f: number
  temp_c: number
  condition: WeatherCondition
  humidity: number
  wind_mph: number
  wind_kph: number
  pressure_mb: number
  uv: number
}

export interface ForecastDay {
  date: string
  day: {
    maxtemp_f: number
    maxtemp_c: number
    mintemp_f: number
    mintemp_c: number
    condition: WeatherCondition
  }
}

export interface WeatherResponse {
  location: Location
  current: CurrentWeather
  forecast: {
    forecastday: ForecastDay[]
  }
}

