import { CardContent } from "@/components/ui/card"
import { RecentSearchItem } from "./RecentSearchItem"

interface RecentSearchesListProps {
  searches: string[]
  onSearchClick: (cityName: string) => void
  onRemove: (cityName: string) => void
}

export function RecentSearchesList({
  searches,
  onSearchClick,
  onRemove,
}: RecentSearchesListProps) {
  return (
    <CardContent className="space-y-2">
      {searches.map((city) => (
        <RecentSearchItem
          key={city}
          cityName={city}
          onSearchClick={onSearchClick}
          onRemove={onRemove}
        />
      ))}
    </CardContent>
  )
}
