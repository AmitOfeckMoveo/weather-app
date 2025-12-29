import { Text } from "@/components/ui/Text"
import { Icon } from "@/components/ui/Icon"
import { cn } from "@/lib/utils"
import type { CurrentWeather } from "@/types/weather"

interface TemperatureDisplayProps {
  current: CurrentWeather
  size?: "sm" | "md" | "lg"
}

const sizeConfig = {
  sm: {
    icon: "xl" as const,
    temp: "3xl" as const,
    condition: "sm" as const,
    gap: "gap-3",
  },
  md: {
    icon: "2xl" as const,
    temp: "5xl" as const,
    condition: "lg" as const,
    gap: "gap-4",
  },
  lg: {
    icon: "3xl" as const,
    temp: "6xl" as const,
    condition: "xl" as const,
    gap: "gap-6",
  },
}

export function TemperatureDisplay({ current, size = "md" }: TemperatureDisplayProps) {
  const config = sizeConfig[size]

  return (
    <div className={cn("flex items-center", config.gap)}>
      <Icon
        src={current.condition.icon}
        alt={current.condition.text}
        size={config.icon}
      />
      <div>
        <Text size={config.temp} weight="bold">
          {current.temp_c}°C
        </Text>
        <Text size={config.condition} className="text-muted-foreground">
          {current.condition.text}
        </Text>
      </div>
    </div>
  )
}
