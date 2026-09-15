import Link from "next/link";
import {
  CalendarPlus,
  ChevronRight,
  PawPrint,
  UserPlus,
  Users,
} from "lucide-react";

const actions = [
  {
    title: "Add Patient",
    description: "Register a new patient",
    href: "/patients",
    icon: PawPrint,
  },
  {
    title: "New Appointment",
    description: "Schedule an appointment",
    href: "/appointments",
    icon: CalendarPlus,
  },
  {
    title: "Add User",
    description: "Create a clinic user",
    href: "/users",
    icon: UserPlus,
  },
  {
    title: "Manage Users",
    description: "View and manage users",
    href: "/users",
    icon: Users,
  },
];

export function QuickActions() {
  return (
    <div className="rounded-2xl border bg-card p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="font-semibold tracking-tight">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Common tasks and shortcuts
        </p>
      </div>

      <div className="grid gap-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group flex items-center gap-3 rounded-xl border border-transparent p-3 transition-colors hover:border-border hover:bg-muted/50"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-[18px] w-[18px]" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">
                  {action.title}
                </p>

                <p className="truncate text-xs text-muted-foreground">
                  {action.description}
                </p>
              </div>

              <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
