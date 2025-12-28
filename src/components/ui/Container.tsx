import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  variant?: "default" | "centered" | "column" | "column-centered" | "row" | "row-centered"
  spacing?: "none" | "sm" | "md" | "lg"
  width?: "full" | "auto"
  className?: string
}

const variantClasses = {
  default: "",
  centered: "flex justify-center",
  column: "flex flex-col",
  "column-centered": "flex flex-col items-center",
  row: "flex flex-row",
  "row-centered": "flex flex-row items-center",
}

const spacingClasses = {
  none: "",
  sm: "space-y-2",
  md: "space-y-4",
  lg: "space-y-8",
}

const widthClasses = {
  full: "w-full",
  auto: "w-auto",
}

export function Container({
  children,
  variant = "default",
  spacing = "none",
  width = "auto",
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        variantClasses[variant],
        spacingClasses[spacing],
        widthClasses[width],
        className
      )}
    >
      {children}
    </div>
  )
}

