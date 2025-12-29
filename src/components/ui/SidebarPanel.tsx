interface SidebarPanelProps {
  children: React.ReactNode
  width?: string
  visibility?: "md" | "lg"
  minWidth?: string
}

export function SidebarPanel({ 
  children, 
  width = "w-[20%]", 
  visibility = "md",
  minWidth = "min-w-[200px]"
}: SidebarPanelProps) {
  return (
    <div className={`hidden ${visibility}:block ${width} ${minWidth}`}>
      <div className="sticky top-[2rem]">
        {children}
      </div>
    </div>
  )
}

