import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono, Sora, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "I-SEE | Innovative Solutions for Evolving Educators",
  description:
    "I-SEE partners with districts to elevate teaching and learning through customized coaching, professional development, and joyful culture-building.",
  metadataBase: new URL("https://www.isee.consulting"),
verification: {
    google: "Pym0H4yaYw7HdtDIaRI7JYG6XTJckB_ywA1jav9-Yds",
  },
  
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "I-SEE | Innovative Solutions for Evolving Educators",
    description:
      "Coaching, professional learning, and culture-building that keep great educators thriving.",
    url: "https://www.isee.consulting",
    siteName: "I-SEE",
    type: "website",
    images: [
      {
        url: "/i-see-logo.png",
        width: 1200,
        height: 630,
        alt: "I-SEE Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "I-SEE | Coaching that lifts classrooms and culture",
    description:
      "Custom coaching and professional development that raise retention and climate scores.",
    images: ["/i-see-logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} ${manrope.variable} antialiased`}
      >
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-E7C2FNRTG5"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-E7C2FNRTG5');
            `}
          </Script>
          <Script
            src="https://cdn.userway.org/widget.js"
            data-account="9DO7BSASMI"
            data-position="3"
            strategy="afterInteractive"
          />
          {children}
          <Analytics />
        </body>
      </html>
        <Script
          src="https://cdn.userway.org/widget.js"
          data-account="9DO7BSASMI"
          data-position="3"
          strategy="afterInteractive"
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
