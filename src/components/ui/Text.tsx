import { cn } from "@/lib/utils"

interface TextProps {
  weight?: "bold" | "light"
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"
  className?: string
  children: React.ReactNode
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
}

const weightClasses = {
  bold: "!font-bold",
  light: "!font-normal",
}

export function Text({
  weight = "light",
  size = "md",
  className,
  children,
  as: Component = "p",
}: TextProps) {
  return (
    <Component
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        className
      )}
    >
      {children}
    </Component>
  )
}

