import type { CurrentWeather } from "@/types/weather"

interface TemperatureDisplayProps {
  current: CurrentWeather
}

export function TemperatureDisplay({ current }: TemperatureDisplayProps) {
  return (
    <div className="flex items-center gap-4">
      <img
        src={`https:${current.condition.icon}`}
        alt={current.condition.text}
        className="w-20 h-20"
      />
      <div>
        <div className="text-5xl font-bold">{current.temp_c}°C</div>
        <div className="text-lg text-muted-foreground">
          {current.condition.text}
        </div>
      </div>
    </div>
  )
}
