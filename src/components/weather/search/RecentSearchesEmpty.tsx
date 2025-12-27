import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentSearchesEmpty() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-lg">Recent Searches</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">No recent searches</p>
      </CardContent>
    </Card>
  )
}
