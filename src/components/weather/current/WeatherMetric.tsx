import { Text } from "@/components/ui/Text"

interface WeatherMetricProps {
  label: string
  value: string | number
  unit?: string
}

export function WeatherMetric({ label, value, unit }: WeatherMetricProps) {
  return (
    <div>
      <Text size="sm" weight="bold" className="text-muted-foreground">
        {label}
      </Text>
      <Text size="lg" weight="bold">
        {value}
        {unit && <span className="ml-1">{unit}</span>}
      </Text>
    </div>
  )
}
