import { cn } from "@/lib/utils"

interface IconProps {
  src: string
  alt: string
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
  className?: string
}

const sizeClasses = {
  xs: "w-4 h-4",    // 16px
  sm: "w-6 h-6",    // 24px
  md: "w-8 h-8",    // 32px
  lg: "w-12 h-12",  // 48px
  xl: "w-16 h-16",  // 64px
  "2xl": "w-20 h-20", // 80px
  "3xl": "w-24 h-24", // 96px
}

export function Icon({ 
  src, 
  alt, 
  size = "md",
  className 
}: IconProps) {
  // Handle protocol-relative URLs (e.g., //cdn.weatherapi.com/...)
  const iconSrc = src.startsWith("//") ? `https:${src}` : src

  return (
    <img
      src={iconSrc}
      alt={alt}
      className={cn(sizeClasses[size], className)}
      loading="lazy"
    />
  )
}

