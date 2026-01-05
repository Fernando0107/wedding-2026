import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f9e9e9",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://boda-carol-juanfernando.com"),
  title: "Save the Date - Carol & Juan Fernando | 14 de Noviembre 2026",
  description: "Estás cordialmente invitado/a a celebrar con nosotros nuestra boda. Carol Castillo y Juan Fernando González. 14 de noviembre de 2026 en Ciudad de Guatemala.",
  keywords: ["boda", "Carol Castillo", "Juan Fernando González", "save the date", "wedding", "Guatemala", "noviembre 2026"],
  authors: [{ name: "Carol & Juan Fernando" }],
  robots: "index, follow",
  openGraph: {
    title: "Save the Date - Carol & Juan Fernando",
    description: "Estás cordialmente invitado/a a celebrar con nosotros nuestra boda. 14 de noviembre de 2026.",
    type: "website",
    locale: "es_GT",
    siteName: "Boda Carol & Juan Fernando",
    images: [
      {
        url: "/placeholders/hero.svg",
        width: 1200,
        height: 630,
        alt: "Carol & Juan Fernando - Save the Date",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Save the Date - Carol & Juan Fernando",
    description: "Estás cordialmente invitado/a a celebrar con nosotros nuestra boda. 14 de noviembre de 2026.",
    images: ["/placeholders/hero.svg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        className={`${playfair.variable} ${lora.variable} antialiased bg-background text-foreground`}
      >
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-dusty-rose focus:text-white focus:rounded-lg"
        >
          Saltar al contenido principal
        </a>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
