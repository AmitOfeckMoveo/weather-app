import { Text } from "@/components/ui/Text"

interface MetricProps {
  label: string
  value: string | number
  unit?: string
}

export function Metric({ label, value, unit }: MetricProps) {
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

