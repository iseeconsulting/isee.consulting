import type { Metadata } from "next";
import Link from "next/link";

const businessEmail = "Kianna@isee.consulting";
const businessEmailHref = "mailto:Kianna@isee.consulting";
const businessPhone = "(513) 276-6331";
const businessPhoneHref = "tel:+15132766331";
const updatedDate = "April 29, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy | I-SEE",
  description:
    "Read how I-SEE collects, uses, and protects information shared through this website.",
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "If you contact I-SEE by email, phone, or another direct method, we may receive personal information you choose to share, such as your name, email address, phone number, organization, and the contents of your message.",
      "We may also receive limited technical information automatically through our website host and service providers, such as IP address, browser type, device information, referral source, and general website usage data used for site operations, security, and performance.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "We use information to respond to inquiries, discuss services, provide requested resources, improve site performance, protect the website, and maintain business records.",
      "We do not sell personal information or use the website to profile visitors for advertising purposes.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "This website uses third-party services to support accessibility, hosting, site delivery, and external checkout experiences. Those providers may collect technical information according to their own privacy practices when you use their tools or visit their websites.",
      "When you click links to purchase resources or use an external checkout page, you leave the I-SEE website and become subject to the privacy policy and terms of the third-party provider, including Stripe or Gumroad where applicable.",
    ],
  },
  {
    title: "Cookies and Tracking",
    body: [
      "I-SEE does not currently use advertising trackers or build remarketing audiences through this website. Limited cookies or similar technologies may still be used by core site infrastructure or embedded third-party tools to support functionality, security, accessibility, and performance.",
      "If analytics or advertising tools are added later, this policy will be updated to reflect that change.",
    ],
  },
  {
    title: "Data Retention and Security",
    body: [
      "We keep personal information only for as long as reasonably necessary to respond to you, maintain business records, comply with legal obligations, and protect the business.",
      "No website or electronic storage method is completely secure, but we take reasonable steps to limit access to information and work with reputable service providers.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "This website is intended for adults and organizations. It is not directed to children under 13, and I-SEE does not knowingly collect personal information from children through this website.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You may contact I-SEE to request access to, correction of, or deletion of personal information you have directly provided, subject to legal and operational limitations.",
      "California and other state privacy laws may provide additional rights in some circumstances. I-SEE will review and respond to reasonable requests consistent with applicable law.",
    ],
  },
  {
    title: "Policy Updates",
    body: [
      "This policy may be updated from time to time. The updated date at the top of this page reflects the latest revision.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eef5ff] via-white to-[#eef3ff] px-4 py-8 text-[#0f172a] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <header className="rounded-[32px] border border-white/70 bg-white/90 px-6 py-6 shadow-[0_18px_50px_rgba(12,27,51,0.12)] backdrop-blur sm:px-8 sm:py-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
            Privacy Policy
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
            How I-SEE handles information shared through this website
          </h1>
          <p className="mt-4 max-w-3xl text-base text-slate-700">
            This policy applies to information collected through{" "}
            <span className="font-semibold">isee.consulting</span> and related
            communications initiated through the site.
          </p>
          <p className="mt-3 text-sm text-slate-500">Last updated: {updatedDate}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-200 hover:text-sky-800"
            >
              Back to Home
            </Link>
            <Link
              href="/terms"
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-200 hover:text-sky-800"
            >
              Terms of Use
            </Link>
          </div>
        </header>

        <section className="mt-8 space-y-5 rounded-[32px] border border-slate-100 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-8">
          {sections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h2 className="text-xl font-semibold text-[#0f172a]">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-base leading-7 text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-[32px] border border-slate-100 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-8">
          <h2 className="text-xl font-semibold text-[#0f172a]">Contact</h2>
          <p className="mt-3 text-base leading-7 text-slate-700">
            For privacy questions or requests, contact I-SEE at{" "}
            <a className="font-semibold text-sky-800" href={businessEmailHref}>
              {businessEmail}
            </a>{" "}
            or{" "}
            <a className="font-semibold text-sky-800" href={businessPhoneHref}>
              {businessPhone}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
