"use client";

import { Bell, ChevronDown } from "lucide-react";

import { MobileSidebar } from "./mobile-sidebar";

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b bg-background/95 px-4 backdrop-blur sm:px-6">
      {/* Left side */}
      <div className="flex items-center gap-3">
        <div className="lg:hidden">
          <MobileSidebar />
        </div>

        <div>
          <h1 className="text-base font-semibold tracking-tight sm:text-lg">
            Dashboard
          </h1>
          <p className="hidden text-xs text-muted-foreground sm:block">
            Overview of your veterinary clinic
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Bell className="h-[18px] w-[18px]" />

          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-primary" />
        </button>

        {/* Divider */}
        <div className="hidden h-7 w-px bg-border sm:block" />

        {/* User profile */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl px-1.5 py-1 transition-colors hover:bg-muted sm:px-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            N
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-medium leading-none">
              Nimo
            </p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Administrator
            </p>
          </div>

          <ChevronDown className="hidden h-4 w-4 text-muted-foreground sm:block" />
        </button>
      </div>
    </header>
  );
}