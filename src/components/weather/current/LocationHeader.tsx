import { CardHeader, CardTitle } from "@/components/ui/card"
import { Text } from "@/components/ui/Text"
import type { Location } from "@/types/weather"

interface LocationHeaderProps {
  location: Location
}

export function LocationHeader({ location }: LocationHeaderProps) {
  return (
    <CardHeader>
      <CardTitle className="text-2xl">
        {location.name}, {location.region}
      </CardTitle>
      <Text size="sm" className="text-muted-foreground">
        {location.country}
      </Text>
    </CardHeader>
  )
}
