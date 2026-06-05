"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const services = [
  {
    icon: "🎯",
    title: "Leadership Coaching",
    blurb: "1:1 and team coaching so leaders set priorities, make decisions, and communicate clearly.",
  },
  {
    icon: "🌤️",
    title: "Culture & Climate",
    blurb: "Routines, meetings, and feedback loops that raise belonging and reduce burnout across campuses.",
  },
  {
    icon: "🧭",
    title: "Instructional Design",
    blurb: "Backward design, PLC rhythms, and PD cycles that move classroom practice and student outcomes.",
  },
];

const howIWork = [
  "Start With Listening Sessions to Learn Your Context",
  "Co-Design a Simple Playbook Leaders Can Own",
  "Model the Moves in Real Meetings and Classrooms",
  "Lightweight Measures so We Track Progress Weekly",
  "Coaching That’s Warm, Direct, and Actionable",
  "Fast Iterations—Ship, Learn, Adjust With You",
];

const impactStats = [
  { label: "Teacher Retention", value: "+12%", detail: "After 2 Semesters" },
  { label: "Climate Score", value: "+18 pts", detail: "Staff Survey Uplift" },
  { label: "ELA Growth", value: "+6%", detail: "District Average" },
];

const processSteps = [
  {
    title: "Listen & Map Needs",
    copy: "Stakeholder interviews and a quick culture/achievement scan to set the right starting point.",
  },
  {
    title: "Co-Design Playbook",
    copy: "Build PD cycles, coaching cadences, and leader routines tailored to each building.",
  },
  {
    title: "Coach & Measure",
    copy: "Weekly coaching, classroom walks, and data pulses so gains stick and scale.",
  },
];

const ownerPhoto = {
  src: "/img_3851-edit.JPG",
  label: "I-SEE in Action",
};

const navItems = [
  { id: "hero", label: "Overview" },
  { id: "partners", label: "Partners" },
  { id: "services", label: "Services" },
  { id: "how", label: "How I Work" },
  { id: "process", label: "Process" },
  { id: "people", label: "About" },
  { id: "contact", label: "Contact" },
];

const businessPhoneDisplay = "(513) 633-9126";
const businessPhoneHref = "tel:+15132766331";
const businessEmailDisplay = "Kianna@isee.consulting";
const businessEmailHref = "mailto:Kianna@isee.consulting";
const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

const SectionDivider = () => (
  <div
    aria-hidden="true"
    className="mx-auto my-12 flex w-full max-w-4xl items-center gap-3 opacity-70"
  >
    <span className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
    <span className="h-3 w-3 rounded-full bg-[rgba(249,115,22,0.7)] shadow-lg shadow-[rgba(249,115,22,0.28)]" />
    <span className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
  </div>
);

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) => (
  <div
    className={`flex flex-col gap-3 ${
      align === "center" ? "items-center text-center" : "text-left"
    }`}
  >
    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-700 sm:tracking-[0.4em]">
      {eyebrow}
    </p>
    <h2 className="text-3xl font-semibold text-[#0f172a]">{title}</h2>
    {description ? (
      <p className="max-w-3xl text-base text-slate-700">{description}</p>
    ) : null}
  </div>
);

const PrimaryButton = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    className="rounded-full bg-gradient-to-r from-[#0f172a] to-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(15,23,42,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
    onClick={onClick}
  >
    {children}
  </Link>
);

const GhostButton = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    className="rounded-full border border-slate-200 bg-white/85 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-200 hover:text-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
    onClick={onClick}
  >
    {children}
  </Link>
);

const useScrollReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-animate]");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const useActiveSection = (setActiveSection: (id: string) => void) => {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[data-section]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [setActiveSection]);
};

export default function Home() {
  useScrollReveal();
  const [activeSection, setActiveSection] = useState("hero");
  useActiveSection(setActiveSection);

  const trackEvent = useMemo(
    () =>
      (label: string) => {
        if (typeof window === "undefined") return;
        window.dispatchEvent(
          new CustomEvent("isee:cta", {
            detail: {
              label,
              timestamp: new Date().toISOString(),
            },
          })
        );
      },
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#eef5ff] via-white to-[#eef3ff] text-[#0f172a]">
      <div
        className="pointer-events-none absolute inset-x-0 top-[-220px] h-[440px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.32),_transparent_55%)] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-180px] top-1/2 h-96 w-96 rounded-full bg-[conic-gradient(from_45deg,_rgba(249,115,22,0.18),_transparent_40%)] blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-6 sm:px-6 sm:pb-16 sm:pt-8 lg:px-10">
        <header className="sticky top-3 z-50 space-y-2 sm:top-4 sm:space-y-3">
          <div className="flex flex-col items-center gap-2 rounded-3xl border border-white/70 bg-white/90 px-4 py-3 shadow-[0_15px_40px_rgba(12,27,51,0.16)] backdrop-blur sm:rounded-full sm:px-6 sm:py-4 md:w-full">
            <div className="flex w-full items-center justify-center gap-4">
              <div className="flex flex-1 items-center justify-center gap-4">
                <div className="relative flex h-20 w-20 shrink-0 items-center justify-center sm:h-24 sm:w-24 md:h-28 md:w-28">
                  <Image
                    src="/i-see-logo.png"
                    alt="I-SEE logo"
                    fill
                    sizes="(min-width: 1024px) 180px, 160px"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="leading-tight text-center">
                  <p className="text-xl font-semibold tracking-[0.02em] text-sky-800 md:text-2xl">I-SEE</p>
                  <p className="text-sm text-slate-600 sm:text-base md:text-lg">
                    Innovative Solutions for Evolving Educators
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden w-full items-center justify-center md:flex md:gap-2">
              <nav className="flex items-center justify-center gap-3 text-[13px] md:text-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className={`rounded-full px-3 py-1.5 whitespace-nowrap transition ${
                      activeSection === item.id
                        ? "bg-white text-sky-800 shadow-inner shadow-sky-200/60"
                        : "text-slate-600 hover:text-sky-700"
                    }`}
                    aria-current={activeSection === item.id ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/resources"
                  className="rounded-full bg-gradient-to-r from-[#0f172a] to-sky-700 px-4 py-1.5 whitespace-nowrap text-white shadow-[0_12px_28px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(15,23,42,0.24)]"
                >
                  Resources
                </Link>
              </nav>
            </div>
          </div>
          <nav className="rounded-3xl border border-white/70 bg-white/90 p-2.5 shadow-[0_14px_34px_rgba(12,27,51,0.12)] backdrop-blur md:hidden">
            <Link
              href="/resources"
              className="flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#0f172a] to-sky-700 px-4 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.22)] transition hover:-translate-y-0.5"
            >
              Explore Resources
            </Link>
            <div className="mt-2 flex items-center gap-2 overflow-x-auto pb-1 text-[12px] font-semibold text-slate-600">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={`whitespace-nowrap rounded-full border px-3 py-2 transition ${
                    activeSection === item.id
                      ? "border-sky-200 bg-sky-100 text-sky-800 shadow-sm"
                      : "border-transparent bg-slate-50 text-slate-600"
                  }`}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        <main className="mt-10 flex flex-col gap-12 sm:mt-12 sm:gap-16 lg:gap-24">
          <section
            id="hero"
            data-section
            className="relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-sky-50 to-[#eef5ff] p-6 shadow-[0_40px_90px_rgba(12,27,51,0.16)] sm:rounded-[40px] sm:p-10"
            data-animate
          >
            <div className="absolute inset-0 opacity-70">
              <div className="absolute left-[-5%] top-[-10%] h-64 w-64 rounded-full bg-gradient-to-br from-sky-300/60 to-transparent blur-3xl" />
              <div className="absolute right-[-8%] top-[20%] h-80 w-80 rounded-full bg-gradient-to-br from-[rgba(15,23,42,0.1)] via-sky-200/40 to-transparent blur-3xl" />
              <div className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_rgba(12,27,51,0.08)_0,_transparent_55%)]" />
            </div>
            <div className="relative grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:items-center">
              <div className="space-y-6 text-center lg:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">
                  Innovative Solutions for Evolving Educators
                </p>
                <h1 className="text-center text-3xl font-semibold leading-tight text-[#0f172a] sm:text-4xl lg:text-left xl:text-5xl">
                  Raise Retention, Lift Climate, and Energize Classrooms This Semester.
                </h1>
                <p className="text-base text-slate-700 sm:text-lg">
                  I help districts lift retention, climate, and instruction with people-first coaching and professional learning.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <PrimaryButton
                    href={businessEmailHref}
                    onClick={() => trackEvent("Schedule a Call (hero)")}
                  >
                    Schedule a Call
                  </PrimaryButton>
                  <GhostButton
                    href="/resources"
                    onClick={() => trackEvent("Browse Resources")}
                  >
                    Browse Resources
                  </GhostButton>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 lg:justify-start">
                  <span className="rounded-full bg-white/80 px-3 py-2 shadow-sm">
                    Trusted Across Ohio Districts
                  </span>
                  <span className="rounded-full bg-white/80 px-3 py-2 shadow-sm">
                    People-First Coaching
                  </span>
                  <span className="rounded-full bg-white/80 px-3 py-2 shadow-sm">
                    Implementation Support
                  </span>
                </div>
              </div>
              <div className="relative mx-auto w-full rounded-[28px] border border-sky-100/70 bg-white/90 p-6 text-left shadow-[0_25px_60px_rgba(12,27,51,0.12)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">
                  Proof of Impact
                </p>
                <div className="mt-4 grid gap-3 rounded-2xl border border-sky-100 bg-gradient-to-r from-white to-sky-50/70 px-4 py-3 text-sm font-semibold text-slate-800 shadow-inner shadow-sky-100/60">
                  {impactStats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-3">
                      <span className="h-8 w-8 rounded-full bg-[rgba(15,23,42,0.1)] text-center text-lg leading-8 text-[#0f172a]">
                        ★
                      </span>
                      <div className="flex flex-col">
                        <span className="text-base font-semibold text-[#0f172a]">{stat.value}</span>
                        <span className="text-xs text-slate-600 sm:text-[13px]">{stat.label} — {stat.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs leading-6 text-slate-500">
                  Illustrative outcomes are based on prior engagements and may vary
                  by district context, implementation, timeline, and baseline conditions.
                </p>
              </div>
            </div>
          </section>

          <section
            id="partners"
            data-section
            className="rounded-[28px] border border-slate-100 bg-white/90 p-6 text-center shadow-sm sm:p-8"
            data-animate
          >
            <SectionHeading
              eyebrow="Partners"
              title="Supporting District Teams Across Ohio"
            />
          </section>

          <section
            id="services"
            data-section
            className="rounded-[32px] border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
            data-animate
          >
            <SectionHeading
              eyebrow="Services"
              title="Offerings Built for District Teams"
              description="Three focused ways to work together—pick one or blend them for your district."
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-3xl border border-slate-100 bg-white/95 px-6 py-5 text-left shadow-[0_14px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_20px_40px_rgba(15,23,42,0.15)]"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <span className="absolute inset-0 opacity-0 transition group-hover:opacity-100" aria-hidden>
                    <span className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100 blur-3xl" />
                  </span>
                  <span className="mt-1 h-10 w-10 shrink-0 rounded-2xl bg-sky-50 text-center text-xl leading-10 text-sky-700 shadow-inner shadow-sky-100/70">
                    {service.icon}
                  </span>
                  <div className="space-y-1">
                    <span className="text-base font-semibold text-[#0f172a]">{service.title}</span>
                    <p className="text-sm text-slate-700">{service.blurb}</p>
                  </div>
                  <span className="ml-auto rounded-full bg-[rgba(249,115,22,0.12)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f97316]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </article>
              ))}
            </div>
          </section>

          <section
            id="how"
            data-section
            className="rounded-[32px] border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
            data-animate
            data-animate-strong
          >
            <SectionHeading
              eyebrow="How I Work"
              title="Simple, Human, Outcome-Driven"
              description="Lean process, clear ownership, and measurable gains without extra bureaucracy."
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {howIWork.map((item, index) => (
                <li
                  key={item}
                  className="rounded-3xl border border-sky-100 bg-white/90 px-6 py-4 text-base font-semibold text-[#0f172a] shadow-[0_18px_36px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_46px_rgba(15,23,42,0.12)]"
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section
            id="process"
            data-section
            className="rounded-[32px] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-[#eef5ff] p-6 shadow-lg shadow-slate-200/60 sm:p-8"
            data-animate
          >
            <SectionHeading
              eyebrow="Process"
              title="A Three-Step Partnership"
              description="Clear steps and steady coaching so stakeholders stay aligned."
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.1)]"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <span className="absolute right-4 top-4 text-[rgba(15,23,42,0.1)] text-3xl font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold text-[#0f172a]">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-700">{step.copy}</p>
                </article>
              ))}
            </div>
          </section>

          <SectionDivider />

          <section
            id="people"
            data-section
            className="grid gap-6 overflow-hidden rounded-[32px] border border-slate-100 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2"
            data-animate
          >
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700 sm:tracking-[0.35em]">
                About
              </p>
              <h2 className="text-[28px] font-semibold text-[#0f172a]">Meet the Person Behind I-SEE</h2>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-800">
                Ms. Kianna Marks, CEO
              </p>
              <p className="text-base text-slate-700">
                Kianna Marks is an accomplished educational leader with over a decade of experience as a building administrator and a foundation as a high school English teacher. She has served as a coach and RESA mentor and leader, guiding and developing educators at various stages of their careers.
              </p>
              <p className="text-base text-slate-700">
                Kianna is currently completing her doctoral studies, with her research focused on trauma-informed practices and their impact on student success in urban middle schools. Her work is driven by a commitment to empowering educators, strengthening instructional leadership, and creating equitable, supportive learning environments where both teachers and students can thrive.
              </p>
              <p className="text-sm text-slate-600">
                Recent win: guided a district leadership team to stabilize retention and lift climate scores within two semesters.
              </p>
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 px-4 py-3 text-sm text-slate-800 shadow-inner">
                “Our climate scores jumped and teacher retention stabilized, because leaders finally had a clear playbook and coaching support.” — Assistant Superintendent, Ohio District
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-sky-50 p-4 shadow-xl shadow-slate-200 sm:min-h-[420px] sm:p-6">
                <Image
                  src={ownerPhoto.src}
                  alt={ownerPhoto.label}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/92 px-4 py-2 text-xs font-semibold text-slate-700 shadow">
                  <span className="h-2 w-2 rounded-full bg-sky-500" />
                  {ownerPhoto.label}
                </div>
              </div>
            </div>
          </section>

          <SectionDivider />

          <section
            id="contact"
            data-section
            className="rounded-[32px] border border-slate-100 bg-gradient-to-br from-white via-sky-50 to-[#c8e9ff] p-6 text-center shadow-lg shadow-sky-100/50 sm:p-10"
            data-animate
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700 sm:tracking-[0.5em]">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#0f172a] sm:text-4xl">
              Let&apos;s Co-Create Joyful, Student-Centered Districts
            </h2>
            <p className="mt-4 text-base text-slate-700 sm:text-lg">
              Reach out to plan coaching cycles, professional development, or culture-building sessions tailored to your campuses.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-700">
              <a
                href={businessEmailHref}
                className="rounded-full border border-sky-200 bg-white/85 px-4 py-2 transition hover:border-sky-300 hover:text-sky-800"
              >
                {businessEmailDisplay}
              </a>
              <a
                href={businessPhoneHref}
                className="rounded-full border border-sky-200 bg-white/85 px-4 py-2 transition hover:border-sky-300 hover:text-sky-800"
              >
                {businessPhoneDisplay}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton
                href={businessEmailHref}
                onClick={() => trackEvent("Schedule a Call (footer)")}
              >
                Schedule a Call
              </PrimaryButton>
            </div>
          </section>
        </main>

        <footer className="mt-12 rounded-3xl border border-white/60 bg-white/80 px-4 py-6 text-sm text-slate-500 shadow-[0_20px_50px_rgba(15,23,42,0.1)] backdrop-blur sm:mt-16 sm:px-6 sm:py-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold text-sky-800">I-SEE</p>
              <p className="text-sm text-slate-600">
                Innovative Solutions for Evolving Educators — empowering districts to innovate, collaborate, and elevate every learner.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-xs font-semibold uppercase tracking-wide text-slate-500 transition hover:text-sky-700"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/resources"
                className="text-xs font-semibold uppercase tracking-wide text-slate-500 transition hover:text-sky-700"
              >
                Resources
              </Link>
              {legalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs font-semibold uppercase tracking-wide text-slate-500 transition hover:text-sky-700"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={businessEmailHref}
                className="text-xs font-semibold uppercase tracking-wide text-sky-700 transition hover:text-sky-600"
              >
                {businessEmailDisplay}
              </a>
              <a
                href={businessPhoneHref}
                className="text-xs font-semibold uppercase tracking-wide text-sky-700 transition hover:text-sky-600"
              >
                {businessPhoneDisplay}
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
