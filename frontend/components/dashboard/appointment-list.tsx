import {
  CalendarClock,
  CheckCircle2,
  Clock3,
  UserRound,
} from "lucide-react";

interface Appointment {
  id: number;
  time: string;
  patient: string;
  type: string;
  veterinarian: string;
  status: "confirmed" | "waiting" | "pending";
}

const appointments: Appointment[] = [
  {
    id: 1,
    time: "09:00",
    patient: "Luna",
    type: "General Checkup",
    veterinarian: "Dr. Smith",
    status: "confirmed",
  },
  {
    id: 2,
    time: "10:30",
    patient: "Max",
    type: "Vaccination",
    veterinarian: "Dr. Johnson",
    status: "waiting",
  },
  {
    id: 3,
    time: "11:15",
    patient: "Milo",
    type: "Follow-up",
    veterinarian: "Dr. Smith",
    status: "confirmed",
  },
  {
    id: 4,
    time: "13:00",
    patient: "Bella",
    type: "Dental Examination",
    veterinarian: "Dr. Brown",
    status: "pending",
  },
];

const statusConfig = {
  confirmed: {
    label: "Confirmed",
    className: "bg-primary/10 text-primary",
    icon: CheckCircle2,
  },
  waiting: {
    label: "Waiting",
    className: "bg-amber-500/10 text-amber-600",
    icon: Clock3,
  },
  pending: {
    label: "Pending",
    className: "bg-muted text-muted-foreground",
    icon: Clock3,
  },
};

export function AppointmentList() {
  return (
    <div className="rounded-2xl border bg-card shadow-sm">
      <div className="flex items-center justify-between border-b p-5">
        <div>
          <h2 className="font-semibold tracking-tight">
            Today&apos;s Appointments
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Upcoming appointments for today
          </p>
        </div>

        <CalendarClock className="h-5 w-5 text-muted-foreground" />
      </div>

      <div className="divide-y">
        {appointments.map((appointment) => {
          const status = statusConfig[appointment.status];
          const StatusIcon = status.icon;

          return (
            <div
              key={appointment.id}
              className="flex items-center gap-4 p-5 transition-colors hover:bg-muted/40"
            >
              <div className="w-14 shrink-0">
                <p className="text-sm font-semibold">
                  {appointment.time}
                </p>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <UserRound className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">
                  {appointment.patient}
                </p>

                <p className="truncate text-xs text-muted-foreground">
                  {appointment.type}
                </p>
              </div>

              <div className="hidden min-w-32 sm:block">
                <p className="text-xs text-muted-foreground">
                  Veterinarian
                </p>
                <p className="mt-1 text-sm font-medium">
                  {appointment.veterinarian}
                </p>
              </div>

              <div
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${status.className}`}
              >
                <StatusIcon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">
                  {status.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
