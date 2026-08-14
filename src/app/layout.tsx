import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KDKMP — Koperasi Desa/Kelurahan Merah Putih",
  description:
    "Program strategis nasional untuk membangun ekonomi desa, mengurangi kemiskinan, dan mengelola rantai pasok melalui koperasi modern yang inklusif dan berkelanjutan.",
  keywords: [
    "KDKMP",
    "Koperasi Desa",
    "Kelurahan Merah Putih",
    "Ekonomi Desa",
    "SIMKOPDES",
    "Torasera",
    "Pemberdayaan Ekonomi",
  ],
  openGraph: {
    title: "KDKMP — Koperasi Desa/Kelurahan Merah Putih",
    description:
      "Membangun Ekonomi Desa, Mewujudkan Indonesia Mandiri. Program strategis nasional melalui koperasi modern.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${jakarta.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
