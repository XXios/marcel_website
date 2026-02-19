import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marcel Vogel | Maler & Gestalter im Landkreis Bamberg",
  description:
    "Marcel Vogel – Maler & Gestalter im Landkreis Bamberg. Spachtel- & Strukturtechniken, Designoberflächen, Lackierarbeiten und exklusive Wandgestaltung. Oberflächen mit Charakter.",
  keywords: [
    "Maler Bamberg",
    "Gestalter Bamberg",
    "Spachteltechnik Bamberg",
    "Wandgestaltung Bamberg",
    "Maler Landkreis Bamberg",
    "Designoberflächen Bamberg",
    "Lackierarbeiten Bamberg",
    "Marcel Vogel Maler",
  ],
  authors: [{ name: "Marcel Vogel – Maler & Gestalter" }],
  openGraph: {
    title: "Marcel Vogel | Maler & Gestalter im Landkreis Bamberg",
    description:
      "Exklusive Wandgestaltung und Oberflächenveredelung im Landkreis Bamberg. Spachteltechniken, Designoberflächen und hochwertige Malerarbeiten. Jetzt Projekt anfragen!",
    locale: "de_DE",
    type: "website",
    siteName: "Marcel Vogel – Maler & Gestalter",
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
      <body className={`${montserrat.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
