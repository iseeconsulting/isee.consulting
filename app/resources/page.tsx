import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const businessEmailHref = "mailto:Kianna@isee.consulting";
const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

const resources = [
  {
    title:
      "The First 90 Days: A Guided Journal For Surviving & Thriving In the Classroom",
    subtitle: "Support for Emotional Wellness, Goal Setting, and Mindset Growth.",
    description:
      "Designed for educators who give so much of themselves each day, this journal offers a space to pause, reflect, and recharge. It is a meaningful gift for Teacher Appreciation Week or a personal investment in well-being and success.",
    href: "https://buy.stripe.com/14AcN6cOIeMb11B05neEo00",
    image: "/IMG_6765.jpeg",
    price: "$21.99",
    format: "Journal",
    details: ["Guided Journal", "Educator Wellness"],
  },
  {
    title: "From Live to Legacy: The EPIC Studios Blueprint",
    subtitle: "A Step-by-Step Guide for Content Creators to Grow, Engage, and Monetize.",
    description:
      "A practical ebook for content creators focused on building real engagement, creating community, and monetizing with strategy instead of guesswork.",
    href: "https://gumroad.com/checkout?_gl=1*c9xey7*_ga*MTIyMDMyNzM5Ny4xNzc3MTI0MjIy*_ga_6LJN6D94N6*czE3NzczMjE1MzEkbzMkZzAkdDE3NzczMjE1MzEkajYwJGwwJGgw",
    image: "/resources/from-live-to-legacy.png",
    price: "$11",
    format: "Ebook",
    details: ["25 pages", "Content Creator Resource"],
  },
];

export const metadata: Metadata = {
  title: "Resources | I-SEE",
  description:
    "Browse journals, ebooks, and practical resources available through I-SEE.",
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eef5ff] via-white to-[#eef3ff] px-4 py-8 text-[#0f172a] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="rounded-[32px] border border-white/70 bg-white/90 px-6 py-5 shadow-[0_18px_50px_rgba(12,27,51,0.12)] backdrop-blur">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
                I-SEE Resources
              </p>
              <h1 className="mt-2 max-w-3xl text-balance text-3xl font-semibold leading-tight sm:text-4xl">
                Journals, Ebooks, and Tools to Support the Work
              </h1>
              <p className="mt-3 max-w-2xl text-base text-slate-700">
                Browse journals for educators and practical digital resources, then purchase directly through the linked storefront.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-200 hover:text-sky-800"
              >
                Back to Home
              </Link>
              <Link
                href={businessEmailHref}
                className="rounded-full bg-gradient-to-r from-[#0f172a] to-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.22)] transition hover:-translate-y-0.5"
              >
                Contact I-SEE
              </Link>
            </div>
          </div>
        </header>

        <section className="mt-10 grid gap-6">
          {resources.map((resource) => (
            <article
              key={resource.href}
              className="grid gap-6 overflow-hidden rounded-[32px] border border-slate-100 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] lg:grid-cols-[320px_minmax(0,1fr)] lg:p-8"
            >
              <div className="relative mx-auto w-full max-w-[320px] overflow-hidden rounded-3xl border border-sky-100 bg-slate-50 shadow-sm">
                <div className="relative aspect-[67/99]">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className="object-contain bg-white p-3"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-800">
                    {resource.format}
                  </span>
                  {"price" in resource ? (
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-700">
                      {resource.price}
                    </span>
                  ) : null}
                  {resource.details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600"
                    >
                      {detail}
                    </span>
                  ))}
                </div>

                <h2 className="mt-4 text-2xl font-semibold text-[#0f172a] sm:text-3xl">
                  {resource.title}
                </h2>
                <p className="mt-2 text-lg text-sky-800">{resource.subtitle}</p>
                <p className="mt-4 max-w-2xl text-base text-slate-700">
                  {resource.description}
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Purchases are completed through third-party checkout providers.
                  Payment processing, order handling, and provider privacy practices
                  are governed by the external platform you use to complete checkout.
                </p>

                <div className="mt-6">
                  <Link
                    href={resource.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full bg-gradient-to-r from-[#0f172a] to-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.22)] transition hover:-translate-y-0.5"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        <footer className="mt-10 rounded-[32px] border border-white/70 bg-white/90 px-6 py-5 shadow-[0_18px_50px_rgba(12,27,51,0.12)] backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold text-sky-800">I-SEE</p>
              <p className="text-sm text-slate-600">
                Direct support for educators, leaders, and teams.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/"
                className="text-xs font-semibold uppercase tracking-wide text-slate-500 transition hover:text-sky-700"
              >
                Home
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
              <Link
                href={businessEmailHref}
                className="text-xs font-semibold uppercase tracking-wide text-sky-700 transition hover:text-sky-600"
              >
                Contact I-SEE
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
