// app/layout.tsx
import { Montserrat, Inter } from 'next/font/google';  // Updated import
import type { Metadata } from "next";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "Green auto expo",
  description: "Future of Green Mobility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}