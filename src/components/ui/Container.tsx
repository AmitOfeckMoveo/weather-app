import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  variant?: "default" | "centered" | "column" | "column-centered" | "row" | "row-centered" | "grid"
  spacing?: "none" | "sm" | "md" | "lg"
  width?: "full" | "auto"
  gridColumns?: "sm" | "md" | "lg"
  gap?: "none" | "sm" | "md" | "lg"
  className?: string
}

const variantClasses = {
  default: "",
  centered: "flex justify-center",
  column: "flex flex-col",
  "column-centered": "flex flex-col items-center",
  row: "flex flex-row",
  "row-centered": "flex flex-row items-center",
  grid: "grid",
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

const gapClasses = {
  none: "",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
}

const gridColumnsClasses = {
  sm: "grid-cols-2",
  md: "grid-cols-2 md:grid-cols-4",
  lg: "grid-cols-4",
}

export function Container({
  children,
  variant = "default",
  spacing = "none",
  width = "auto",
  gridColumns,
  gap = "none",
  className,
}: ContainerProps) {
  const isGrid = variant === "grid"
  const isFlexLayout = ["row", "row-centered", "column", "column-centered"].includes(variant)
  
  return (
    <div
      className={cn(
        variantClasses[variant],
        isGrid && gridColumns && gridColumnsClasses[gridColumns],
        // Use gap for grid/row layouts, spacing for column layouts
        (isGrid || isFlexLayout) ? gapClasses[gap] : spacingClasses[spacing],
        widthClasses[width],
        className
      )}
    >
      {children}
    </div>
  )
}

