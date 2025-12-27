interface WeatherMetricProps {
  label: string
  value: string | number
  unit?: string
}

export function WeatherMetric({ label, value, unit }: WeatherMetricProps) {
  return (
    <div>
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="text-xl font-semibold">
        {value}
        {unit && <span className="ml-1">{unit}</span>}
      </div>
    </div>
  )
}
