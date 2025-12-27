import { CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface RecentSearchesHeaderProps {
  onClear: () => void
}

export function RecentSearchesHeader({ onClear }: RecentSearchesHeaderProps) {
  return (
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
  )
}
