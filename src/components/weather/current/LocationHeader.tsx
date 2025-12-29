import { CardHeader, CardTitle } from "@/components/ui/card"
import { Text } from "@/components/ui/Text"
import { cn } from "@/lib/utils"
import type { Location } from "@/types/weather"

interface LocationHeaderProps {
  location: Location
  size?: "sm" | "md" | "lg"
}

export function LocationHeader({ location, size = "md" }: LocationHeaderProps) {
  const headerConfig = {
    sm: {
      headerPadding: "p-0 pb-2",
      titleSize: "lg" as const,
      countrySize: "xs" as const,
    },
    md: {
      headerPadding: "",
      titleSize: "2xl" as const,
      countrySize: "sm" as const,
    },
    lg: {
      headerPadding: "",
      titleSize: "3xl" as const,
      countrySize: "md" as const,
    },
  }

  const config = headerConfig[size]

  return (
    <CardHeader className={cn(config.headerPadding)}>
      <CardTitle>
        <Text as="h2" size={config.titleSize} weight="bold">
          {location.name}, {location.region}
        </Text>
      </CardTitle>
      <Text size={config.countrySize} className="text-muted-foreground">
        {location.country}
      </Text>
    </CardHeader>
  )
}
