import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Text } from "@/components/ui/Text"

export function RecentSearchesEmpty() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-lg">Recent Searches</CardTitle>
      </CardHeader>
      <CardContent>
        <Text size="sm" className="text-muted-foreground">
          No recent searches
        </Text>
      </CardContent>
    </Card>
  )
}
