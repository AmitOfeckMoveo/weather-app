import type { Location } from "@/types/weather"

interface LocationInfoProps {
  location: Location
  titleSize?: "text-xl" | "text-2xl"
  showCountry?: boolean
}

export function LocationInfo({ location, titleSize = "text-2xl", showCountry = true }: LocationInfoProps) {
  return (
    <div>
      <span className={`${titleSize} font-semibold`}>
        {location.name}, {location.region}
      </span>
      {showCountry && (
        <p className="text-sm text-muted-foreground">{location.country}</p>
      )}
    </div>
  )
}

