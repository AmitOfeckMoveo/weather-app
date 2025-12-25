import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchCityInput() {
  const [cityName, setCityName] = useState("")

  const handleSearch = () => {
    if (cityName.trim()) {
      console.log("Searching for city:", cityName.trim())
    }
  }

  return (
    <div className="flex gap-2 w-full max-w-md">
      <Input
        type="text"
        placeholder="Enter city name..."
        className="flex-1"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  )
}

