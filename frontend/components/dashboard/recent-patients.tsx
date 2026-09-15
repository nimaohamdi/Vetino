import {
  Cat,
  Dog,
  ExternalLink,
  PawPrint,
} from "lucide-react";

interface Patient {
  id: number;
  name: string;
  species: "dog" | "cat" | "other";
  breed: string;
  owner: string;
  lastVisit: string;
}

const patients: Patient[] = [
  {
    id: 1,
    name: "Luna",
    species: "dog",
    breed: "Golden Retriever",
    owner: "Emma Wilson",
    lastVisit: "Today",
  },
  {
    id: 2,
    name: "Milo",
    species: "cat",
    breed: "British Shorthair",
    owner: "James Carter",
    lastVisit: "Yesterday",
  },
  {
    id: 3,
    name: "Max",
    species: "dog",
    breed: "German Shepherd",
    owner: "Olivia Brown",
    lastVisit: "2 days ago",
  },
  {
    id: 4,
    name: "Bella",
    species: "cat",
    breed: "Maine Coon",
    owner: "Noah Davis",
    lastVisit: "3 days ago",
  },
];

function PatientIcon({
  species,
}: {
  species: Patient["species"];
}) {
  if (species === "dog") {
    return <Dog className="h-5 w-5" />;
  }

  if (species === "cat") {
    return <Cat className="h-5 w-5" />;
  }

  return <PawPrint className="h-5 w-5" />;
}

export function RecentPatients() {
  return (
    <div className="rounded-2xl border bg-card shadow-sm">
      <div className="flex items-center justify-between border-b p-5">
        <div>
          <h2 className="font-semibold tracking-tight">
            Recent Patients
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Recently updated patient records
          </p>
        </div>

        <PawPrint className="h-5 w-5 text-muted-foreground" />
      </div>

      <div className="divide-y">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className="flex items-center gap-4 p-5 transition-colors hover:bg-muted/40"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <PatientIcon species={patient.species} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">
                {patient.name}
              </p>

              <p className="truncate text-xs text-muted-foreground">
                {patient.breed}
              </p>
            </div>

            <div className="hidden min-w-28 sm:block">
              <p className="text-xs text-muted-foreground">
                Owner
              </p>

              <p className="mt-1 truncate text-sm font-medium">
                {patient.owner}
              </p>
            </div>

            <div className="hidden min-w-20 md:block">
              <p className="text-xs text-muted-foreground">
                Last visit
              </p>

              <p className="mt-1 text-sm font-medium">
                {patient.lastVisit}
              </p>
            </div>

            <button
              type="button"
              aria-label={`View ${patient.name}`}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

