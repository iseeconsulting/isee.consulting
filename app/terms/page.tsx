import type { Metadata } from "next";
import Link from "next/link";

const updatedDate = "April 29, 2026";

export const metadata: Metadata = {
  title: "Terms of Use | I-SEE",
  description:
    "Read the terms governing your use of the I-SEE website and related resources.",
};

const sections = [
  {
    title: "Website Use",
    body: [
      "By using this website, you agree to use it lawfully and only for legitimate business or informational purposes.",
      "I-SEE may update or remove content, resources, or features at any time without notice.",
    ],
  },
  {
    title: "Informational Content",
    body: [
      "Content on this website is provided for general informational and marketing purposes. It does not create a consulting engagement, legal relationship, or guaranteed outcome.",
      "Any performance examples, case references, or testimonials are presented to describe prior work and should not be interpreted as a promise of identical future results.",
    ],
  },
  {
    title: "External Links and Checkout",
    body: [
      "This website may link to third-party websites, platforms, and payment providers. I-SEE is not responsible for the content, availability, policies, or practices of those third-party services.",
      "Purchases of journals, ebooks, or other resources completed through external providers are governed by the provider's own terms, refund policies, and privacy practices.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "Unless otherwise stated, website content, branding, copy, and downloadable materials on this site are owned by I-SEE or used with permission and may not be copied, republished, or redistributed for commercial use without prior written consent.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    body: [
      "This website is provided on an as-is and as-available basis. To the fullest extent permitted by law, I-SEE disclaims warranties of any kind, whether express or implied, regarding the site and its content.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, I-SEE will not be liable for indirect, incidental, consequential, special, or punitive damages arising from or related to your use of this website or any third-party website linked from it.",
    ],
  },
  {
    title: "Changes",
    body: [
      "These terms may be updated from time to time. Continued use of the website after updates means you accept the revised terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eef5ff] via-white to-[#eef3ff] px-4 py-8 text-[#0f172a] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <header className="rounded-[32px] border border-white/70 bg-white/90 px-6 py-6 shadow-[0_18px_50px_rgba(12,27,51,0.12)] backdrop-blur sm:px-8 sm:py-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
            Terms of Use
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
            Terms for using the I-SEE website
          </h1>
          <p className="mt-4 max-w-3xl text-base text-slate-700">
            These terms apply to your use of{" "}
            <span className="font-semibold">isee.consulting</span>.
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
              href="/privacy"
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-200 hover:text-sky-800"
            >
              Privacy Policy
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
      </div>
    </main>
  );
}
