import { Card, CardContent } from "@/components/ui/card"
import { Text } from "@/components/ui/Text"
import { Icon } from "@/components/ui/Icon"
import type { ForecastDay } from "@/types/weather"

interface ForecastDayCardProps {
  forecastDay: ForecastDay
}

export function ForecastDayCard({ forecastDay }: ForecastDayCardProps) {
  const getDayName = (dateStr: string) => 
    new Date(dateStr).toLocaleDateString("en-US", { weekday: "short" })

  return (
    <Card className="flex flex-col items-center p-4 hover:bg-accent transition-colors">
      <CardContent className="flex flex-col items-center p-0 space-y-2">
        <Text size="sm" className="text-muted-foreground">
          {getDayName(forecastDay.date)}
        </Text>
        <Icon
          src={forecastDay.day.condition.icon}
          alt={forecastDay.day.condition.text}
          size="lg"
        />
        <Text size="md" weight="bold">
          {forecastDay.day.maxtemp_c}°C
        </Text>
        <Text size="sm" className="text-muted-foreground">
          {forecastDay.day.mintemp_c}°C
        </Text>
      </CardContent>
    </Card>
  )
}
