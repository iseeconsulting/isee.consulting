"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export default function PreviewGateClient() {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirectParam = searchParams.get("redirect");
  const redirect = redirectParam && redirectParam.startsWith("/") ? redirectParam : "/";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);
    const password = formData.get("password")?.toString().trim();
    if (!password) {
      setError("Enter the preview password.");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/preview-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, redirect }),
      });

      if (!response.ok) {
        setError("Password is incorrect. Try again.");
        return;
      }

      const data = (await response.json()) as { redirect?: string };
      const target = data.redirect && data.redirect.startsWith("/") ? data.redirect : redirect;
      router.replace(target);
    } catch {
      setError("Could not verify password. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#0f172a] to-[#0ea5e9] px-6 py-12 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/15 bg-white/10 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-100">
          Private Preview
        </p>
        <h1 className="mt-3 text-3xl font-semibold">Enter Preview Password</h1>
        <p className="mt-2 text-sm text-sky-100">
          This preview is locked while we gather feedback. Share the password only with the client team.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block text-sm font-semibold text-white/90">
            Password
            <input
              name="password"
              type="password"
              className="mt-2 w-full rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-base text-white outline-none backdrop-blur placeholder:text-white/60 focus:border-white/60"
              placeholder="Preview password"
              autoComplete="current-password"
            />
          </label>
          {error ? <p className="text-sm text-[#fda4af]">{error}</p> : null}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-white px-4 py-3 text-sm font-semibold text-[#0f172a] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Checking..." : "View Preview"}
          </button>
        </form>
        <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-white/60">
          Tip: unset PREVIEW_PASSWORD to disable the lock.
        </p>
      </div>
    </div>
  );
}
