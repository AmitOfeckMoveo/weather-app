import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchCityInput() {
  return (
    <div className="flex gap-2 w-full max-w-md">
      <Input
        type="text"
        placeholder="Enter city name..."
        className="flex-1"
      />
      <Button>Search</Button>
    </div>
  )
}

