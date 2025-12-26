import { Button } from "@/components/ui/button"

interface ErrorStateProps {
  message?: string
  onRetry?: () => void
  className?: string
}

export function ErrorState({ 
  message = "An error occurred. Please try again.",
  onRetry,
  className = ""
}: ErrorStateProps) {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <p className="text-destructive">{message}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="default">
          Retry
        </Button>
      )}
    </div>
  )
}

