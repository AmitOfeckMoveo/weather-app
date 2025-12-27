import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
    return (
      <Card className="h-fit">
        <CardHeader>
          <CardTitle className="text-lg">Recent Searches</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">No recent searches</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="h-fit">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg">Recent Searches</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClear}
          className="h-6 px-2 text-xs"
        >
          Clear
        </Button>
      </CardHeader>
      <CardContent className="space-y-2">
        {searches.map((city) => (
          <div
            key={city}
            className="flex items-center justify-between group hover:bg-accent rounded-md p-2 transition-colors"
          >
            <button
              onClick={() => onSearchClick(city)}
              className="flex-1 text-left text-sm hover:text-primary transition-colors"
            >
              {city}
            </button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemove(city)}
              className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              ×
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

