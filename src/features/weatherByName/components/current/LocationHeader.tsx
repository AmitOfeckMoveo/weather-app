import { CardHeader, CardTitle } from "@/components/ui/card"
import type { Location } from "../../types"

interface LocationHeaderProps {
  location: Location
}

export function LocationHeader({ location }: LocationHeaderProps) {
  return (
    <CardHeader>
      <CardTitle className="text-2xl">
        {location.name}, {location.region}
      </CardTitle>
      <p className="text-sm text-muted-foreground">{location.country}</p>
    </CardHeader>
  )
}

