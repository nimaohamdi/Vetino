import {
  CalendarDays,
  ClipboardList,
  PawPrint,
  Users,
} from "lucide-react";

import { AppointmentList } from "@/components/dashboard/appointment-list";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { RecentPatients } from "@/components/dashboard/recent-patients";
import { StatCard } from "@/components/dashboard/stat-card";
import { AppShell } from "@/components/layout/app-shell";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-8">
        {/* Page header */}
        <div>
          <p className="text-sm font-medium text-primary">
            Clinic Overview
          </p>

          <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
            Good morning, Nimo 👋
          </h2>

          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Here&apos;s what&apos;s happening at your clinic today.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Patients"
            value="1,248"
            description="from last month"
            trend="+8.2%"
            trendType="positive"
            icon={PawPrint}
          />

          <StatCard
            title="Today&apos;s Appointments"
            value="18"
            description="scheduled for today"
            trend="+3"
            trendType="positive"
            icon={CalendarDays}
          />

          <StatCard
            title="Veterinarians"
            value="12"
            description="active veterinarians"
            icon={Users}
          />

          <StatCard
            title="Pending Tasks"
            value="7"
            description="need your attention"
            trend="3 urgent"
            trendType="negative"
            icon={ClipboardList}
          />
        </div>

        {/* Main content */}
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
          <AppointmentList />

          <div className="space-y-6">
            <QuickActions />
          </div>
        </div>

        {/* Recent patients */}
        <RecentPatients />
      </div>
    </AppShell>
  );
}

