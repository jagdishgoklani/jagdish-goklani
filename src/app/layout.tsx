import type { Metadata } from "next";
import { Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const devanagari = Noto_Sans_Devanagari({
  subsets: ["latin", "devanagari"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "जग ग्वालियरी - Jagdish Goklani Poetry",
  description: "मौलिक और स्वरचित कविताएँ - Original and composed Hindi poems by Jagdish Goklani",
  openGraph: {
    title: "जग ग्वालियरी",
    description: "Hindi poetry by Jagdish Goklani",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className={devanagari.className}>
      <body className="bg-gradient-to-br from-amber-50 via-slate-50 to-indigo-50 antialiased">
        {children}
      </body>
    </html>
  );
}
