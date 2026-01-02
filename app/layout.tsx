import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Save the Date - Carol & Juan Fernando - 14 de Noviembre 2026",
  description: "Celebra con nosotros nuestra boda. Carol Castillo Córdova y Juan Fernando González Díaz. 14 de noviembre de 2026.",
  openGraph: {
    title: "Save the Date - Carol & Juan Fernando",
    description: "Celebra con nosotros nuestra boda. 14 de noviembre de 2026.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Save the Date - Carol & Juan Fernando",
    description: "Celebra con nosotros nuestra boda. 14 de noviembre de 2026.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
