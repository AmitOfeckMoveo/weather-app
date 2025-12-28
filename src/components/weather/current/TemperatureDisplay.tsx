import { Text } from "@/components/ui/Text"
import { Icon } from "@/components/ui/Icon"
import type { CurrentWeather } from "@/types/weather"

interface TemperatureDisplayProps {
  current: CurrentWeather
}

export function TemperatureDisplay({ current }: TemperatureDisplayProps) {
  return (
    <div className="flex items-center gap-4">
      <Icon
        src={current.condition.icon}
        alt={current.condition.text}
        size="2xl"
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
