import { Card } from "@/components/ui/card"
import { RecentSearchesHeader } from "./RecentSearchesHeader"
import { RecentSearchesList } from "./RecentSearchesList"
import { RecentSearchesEmpty } from "./RecentSearchesEmpty"

interface RecentSearchesProps {
  searches: string[]
  onSearchClick: (cityName: string) => void
  onRemove: (cityName: string) => void
  onClear: () => void
}

export function RecentSearches({
  searches,
  onSearchClick,
  onRemove,
  onClear,
}: RecentSearchesProps) {
  if (searches.length === 0) {
    return <RecentSearchesEmpty />
  }

  return (
    <Card className="h-fit">
      <RecentSearchesHeader onClear={onClear} />
      <RecentSearchesList
        searches={searches}
        onSearchClick={onSearchClick}
        onRemove={onRemove}
      />
    </Card>
  )
}

