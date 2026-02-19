import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Malerbetrieb Vogel | Ihr Malerexperte im Landkreis Bamberg",
  description:
    "Malerbetrieb Vogel – Ihr zuverlässiger Maler im Landkreis Bamberg. Innenanstriche, Lackierarbeiten, Spachtel- & Strukturtechniken, Renovierung & Modernisierung. Sauber, pünktlich, fair.",
  keywords: [
    "Maler Bamberg",
    "Malerbetrieb Bamberg",
    "Maler Landkreis Bamberg",
    "Innenanstrich Bamberg",
    "Lackierarbeiten Bamberg",
    "Renovierung Bamberg",
    "Spachteltechnik Bamberg",
    "Malerbetrieb Vogel",
  ],
  authors: [{ name: "Malerbetrieb Vogel" }],
  openGraph: {
    title: "Malerbetrieb Vogel | Ihr Malerexperte im Landkreis Bamberg",
    description:
      "Zuverlässiger Malerbetrieb im Landkreis Bamberg. Innenanstriche, Lackierarbeiten, Spachteltechniken und Renovierung. Jetzt Angebot anfragen!",
    locale: "de_DE",
    type: "website",
    siteName: "Malerbetrieb Vogel",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
