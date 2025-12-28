import { Text } from "@/components/ui/Text"
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
        <Text size="5xl" weight="bold">
          {current.temp_c}°C
        </Text>
        <Text size="lg" className="text-muted-foreground">
          {current.condition.text}
        </Text>
      </div>
    </div>
  )
}
