import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  trend?: string;
  trendType?: "positive" | "negative" | "neutral";
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  trendType = "neutral",
}: StatCardProps) {
  return (
    <div className="rounded-2xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">
            {title}
          </p>

          <p className="text-3xl font-bold tracking-tight">
            {value}
          </p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs">
        {trend && (
          <span
            className={
              trendType === "positive"
                ? "font-semibold text-primary"
                : trendType === "negative"
                  ? "font-semibold text-destructive"
                  : "font-semibold text-muted-foreground"
            }
          >
            {trend}
          </span>
        )}

        <span className="text-muted-foreground">
          {description}
        </span>
      </div>
    </div>
  );
}
