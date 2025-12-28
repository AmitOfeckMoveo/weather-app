import { useState } from "react"
import { WeatherByNameHome } from "./components/weather/WeatherByNameHome"
import { RecentSearches } from "./components/weather/search/RecentSearches"
import { CurrentLocationWeatherCard } from "./components/weather/current/CurrentLocationWeatherCard"
import { useRecentSearches } from "./hooks/useRecentSearches"
import { Layout } from "./components/ui/Layout"
import { SidebarPanel } from "./components/ui/SidebarPanel"

function App() {
  const { recentSearches, addSearch, removeSearch, clearSearches } = useRecentSearches()
  const [externalSearchQuery, setExternalSearchQuery] = useState<string | null>(null)

  const handleHistoryClick = (cityName: string) => {
    setExternalSearchQuery(cityName)
  }

  return (
    <div className="min-h-screen bg-background">
      <Layout columns={[20, 60, 20]}>
        <SidebarPanel width="w-full" visibility="md">
          <RecentSearches
            searches={recentSearches}
            onSearchClick={handleHistoryClick}
            onRemove={removeSearch}
            onClear={clearSearches}
          />
        </SidebarPanel>
        <WeatherByNameHome 
          externalSearchQuery={externalSearchQuery}
          onAddSearch={addSearch}
        />
        <SidebarPanel width="w-full" visibility="lg">
          <CurrentLocationWeatherCard />
        </SidebarPanel>
      </Layout>
    </div>
  )
}

export default App
