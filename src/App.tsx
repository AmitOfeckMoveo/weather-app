import { useState } from "react"
import { WeatherByNameHome } from "./components/weather/WeatherByNameHome"
import { RecentSearches } from "./components/weather/search/RecentSearches"
import { CurrentLocationWeatherCard } from "./components/weather/current/CurrentLocationWeatherCard"
import { useRecentSearches } from "./hooks/useRecentSearches"

function App() {
  const { recentSearches, addSearch, removeSearch, clearSearches } = useRecentSearches()
  const [externalSearchQuery, setExternalSearchQuery] = useState<string | null>(null)

  const handleHistoryClick = (cityName: string) => {
    setExternalSearchQuery(cityName)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex gap-4 p-4 md:p-8 max-w-7xl mx-auto">
        {/* Left Sidebar - Recent Searches */}
        <aside className="hidden md:block w-[20%] min-w-[200px]">
          <div className="sticky top-[2rem]">
            <RecentSearches
              searches={recentSearches}
              onSearchClick={handleHistoryClick}
              onRemove={removeSearch}
              onClear={clearSearches}
            />
          </div>
        </aside>

        {/* Main Content - Weather App */}
        <main className="flex-1 md:w-[60%]">
          <WeatherByNameHome 
            externalSearchQuery={externalSearchQuery}
            onAddSearch={addSearch}
          />
        </main>

        {/* Right Sidebar - Current Location Weather */}
        <aside className="hidden lg:block w-[25%]">
          <div className="sticky top-[2rem]">
            <CurrentLocationWeatherCard />
          </div>
        </aside>
      </div>
    </div>
  )
}

export default App
