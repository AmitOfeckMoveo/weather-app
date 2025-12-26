interface LoadingStateProps {
  message?: string
  className?: string
}

export function LoadingState({ 
  message = "Loading...", 
  className = "" 
}: LoadingStateProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <p className="text-muted-foreground">{message}</p>
    </div>
  )
}

