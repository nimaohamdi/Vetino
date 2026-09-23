"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { PawPrint } from "lucide-react";
import { login } from "@/lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      await login({
        email,
        password,
      });

      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid email or password.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-8">
      <div className="w-full max-w-md">
        {/* Branding */}
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
            <PawPrint className="h-6 w-6" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to your Vetino account
          </p>
        </div>

        {/* Login card */}
        <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="flex h-11 w-full rounded-xl border bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium"
                >
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="flex h-11 w-full rounded-xl border bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-input accent-primary"
              />

              <label
                htmlFor="remember"
                className="text-sm text-muted-foreground"
              >
                Remember me
              </label>
            </div>

            {/* Error */}
            {error && (
              <div
                role="alert"
                className="rounded-xl border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive"
              >
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="flex h-11 w-full items-center justify-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>

        {/* Register */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-primary hover:underline"
          >
            Create one
          </Link>
        </p>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vetino. All rights reserved.
        </p>
      </div>
    </main>
  );
}