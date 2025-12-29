import { LoadingState } from "./LoadingState"
import { ErrorState } from "./ErrorState"

interface QueryStateProps {
  isLoading: boolean
  error: Error | string | null
  data: any
  loadingMessage?: string
  errorMessage?: string
  onRetry?: () => void
  children: React.ReactNode
  emptyState?: React.ReactNode
  showEmptyWhen?: boolean
}

export function QueryState({
  isLoading,
  error,
  data,
  loadingMessage,
  errorMessage,
  onRetry,
  children,
  emptyState,
  showEmptyWhen = false,
}: QueryStateProps) {
  // Show loading state
  if (isLoading) {
    return <LoadingState message={loadingMessage} />
  }

  // Show error state
  if (error) {
    const errorMsg = typeof error === "string" ? error : errorMessage || "An error occurred. Please try again."
    return <ErrorState message={errorMsg} onRetry={onRetry} />
  }

  // Show empty state if condition is met
  if (showEmptyWhen && !data && emptyState) {
    return <>{emptyState}</>
  }

  // Show content when data exists
  if (data) {
    return <>{children}</>
  }

  // No data and no empty state
  return null
}

