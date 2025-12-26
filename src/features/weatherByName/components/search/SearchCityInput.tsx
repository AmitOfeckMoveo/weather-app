import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchCityInputProps {
  value: string
  onChange: (value: string) => void
  onSearch: () => void
}

export function SearchCityInput({ value, onChange, onSearch }: SearchCityInputProps) {
  return (
    <div className="flex gap-2 w-full max-w-md">
      <Input
        type="text"
        placeholder="Enter city name..."
        className="flex-1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button onClick={onSearch}>Search</Button>
    </div>
  )
}

