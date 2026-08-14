import type { Metadata, Viewport } from "next";
import { Lora, Great_Vibes, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const bruney = localFont({
  src: "../public/fonts/ss-bruney.otf",
  variable: "--font-bruney",
  display: "swap",
});

const laLuxes = localFont({
  src: "../public/fonts/LaLuxes.otf",
  variable: "--font-laluxes",
  display: "swap",
});

const safiraMarch = localFont({
  src: "../public/fonts/Safira March Personal Use Only.ttf",
  variable: "--font-safira",
  display: "swap",
});

const lora = Lora({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5eeea",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gonzalez-castillo.wedding"),
  title: "Nuestra Boda - Carol & Juan Fernando | 14 de Noviembre 2026",
  description: "Estás cordialmente invitado/a a celebrar con nosotros nuestra boda. Carol Castillo y Juan Fernando González. 14 de noviembre de 2026 en Ciudad de Guatemala.",
  keywords: ["boda", "Carol Castillo", "Juan Fernando González", "nuestra boda", "wedding", "Guatemala", "noviembre 2026"],
  authors: [{ name: "Carol & Juan Fernando" }],
  robots: "noindex, nofollow",
  openGraph: {
    title: "Nuestra Boda - Carol & Juan Fernando",
    description: "Estás cordialmente invitado/a a celebrar con nosotros nuestra boda. Sábado 14 de noviembre de 2026.",
    type: "website",
    locale: "es_GT",
    siteName: "Boda Carol & Juan Fernando",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Carol & Juan Fernando - Nuestra Boda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuestra Boda - Carol & Juan Fernando",
    description: "Estás cordialmente invitado/a a celebrar con nosotros nuestra boda. Sábado 14 de noviembre de 2026.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/logo/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/logo/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/logo/apple-icon-180.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/logo/favicon-32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${bruney.variable} ${laLuxes.variable} ${safiraMarch.variable} ${lora.variable} ${playfair.variable} ${greatVibes.variable} antialiased bg-background text-foreground`}
      >
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-dusty-rose focus:text-white focus:rounded-lg"
        >
          Saltar al contenido principal
        </a>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
