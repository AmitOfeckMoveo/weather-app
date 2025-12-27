import { Button } from "@/components/ui/button"

interface RecentSearchItemProps {
  cityName: string
  onSearchClick: (cityName: string) => void
  onRemove: (cityName: string) => void
}

export function RecentSearchItem({
  cityName,
  onSearchClick,
  onRemove,
}: RecentSearchItemProps) {
  return (
    <div className="flex items-center justify-between group hover:bg-accent rounded-md p-2 transition-colors">
      <button
        onClick={() => onSearchClick(cityName)}
        className="flex-1 text-left text-sm hover:text-primary transition-colors"
      >
        {cityName}
      </button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onRemove(cityName)}
        className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        ×
      </Button>
    </div>
  )
}

