"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDays,
  LayoutDashboard,
  LogOut,
  PawPrint,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Patients",
    href: "/patients",
    icon: PawPrint,
  },
  {
    name: "Appointments",
    href: "/appointments",
    icon: CalendarDays,
  },
  {
    name: "Users",
    href: "/users",
    icon: Users,
  },
  {
    name: "Roles",
    href: "/roles",
    icon: ShieldCheck,
  },
];

export function SidebarContent() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      {/* Branding */}
      <div className="flex h-16 items-center gap-3 border-b px-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
          <PawPrint className="h-5 w-5" />
        </div>

        <div className="flex flex-col">
          <span className="text-base font-bold tracking-tight">
            Vetino
          </span>
          <span className="text-[11px] text-muted-foreground">
            Veterinary Platform
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Workspace
        </p>

        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <Icon className="h-[18px] w-[18px]" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom actions */}
      <div className="border-t p-4">
        <Link
          href="/settings"
          className={cn(
            "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
            pathname === "/settings" ||
              pathname.startsWith("/settings/")
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:bg-muted hover:text-foreground",
          )}
        >
          <Settings className="h-[18px] w-[18px]" />
          <span>Settings</span>
        </Link>

        <button
          type="button"
          className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
        >
          <LogOut className="h-[18px] w-[18px]" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="h-screen w-64 border-r bg-background">
      <SidebarContent />
    </aside>
  );
}