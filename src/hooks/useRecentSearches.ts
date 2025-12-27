import { useState, useCallback } from "react"

const STORAGE_KEY = "weather-recent-searches"
const MAX_RECENT = 100

export function useRecentSearches() {
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  const addSearch = useCallback((cityName: string) => {
    setRecentSearches((prev) => {
      // Remove if exists (case-insensitive)
      const filtered = prev.filter(
        (city) => city.toLowerCase() !== cityName.toLowerCase()
      )
      // Add to top and limit
      const updated = [cityName, ...filtered].slice(0, MAX_RECENT)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }, [])

  const clearSearches = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setRecentSearches([])
  }, [])

  const removeSearch = useCallback((cityName: string) => {
    setRecentSearches((prev) => {
      const filtered = prev.filter(
        (city) => city.toLowerCase() !== cityName.toLowerCase()
      )
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
      return filtered
    })
  }, [])

  return { recentSearches, addSearch, clearSearches, removeSearch }
}

