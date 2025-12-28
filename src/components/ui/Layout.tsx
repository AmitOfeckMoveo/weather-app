import { Container } from "./Container"

interface LayoutProps {
  children: React.ReactNode[]
  columns: number[]  // e.g. [20, 60, 20] or [25, 25, 25, 25] for any number of columns
  gap?: "none" | "sm" | "md" | "lg"
  className?: string
}

export function Layout({
  children,
  columns,
  gap = "md",
  className = "p-4 md:p-8 max-w-7xl mx-auto",
}: LayoutProps) {
  // Ensure columns array matches children length
  if (columns.length !== children.length) {
    console.warn(`Layout: columns array (${columns.length}) doesn't match children count (${children.length})`)
  }

  return (
    <Container variant="row" gap={gap} width="full" className={className}>
      {children.map((child, index) => {
        if (!child || columns[index] <= 0) return null
        
        return (
          <div 
            key={index}
            style={{ width: `${columns[index]}%` }}
            className="flex-shrink-0"
          >
            {child}
          </div>
        )
      })}
    </Container>
  )
}

