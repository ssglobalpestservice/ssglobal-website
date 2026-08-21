import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileBar } from "@/components/layout/StickyMobileBar";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "S.S Global Pest Control Services | Safe, Odorless & Eco-Friendly Pest Management",
  description: "S.S Global Pest Control Services offers certified, odorless, and eco-friendly pest control & termite treatment across Mumbai, Thane, and Navi Mumbai. Book your pest control today.",
  keywords: [
    "SS PESTS CONTROL SERVICES",
    "SS PEST CONTROL",
    "ss global pests control services",
    "ss global",
    "SS GLOBAL",
    "PEST CONTROL",
    "pest control",
    "S.S Global Pest Control Services",
    "pest control services in Mumbai",
    "best pest control near me",
    "termite pest control Mumbai",
    "bed bugs pest control",
    "cockroach pest control",
    "eco-friendly pest control",
    "odorless pest control",
    "residential pest control",
    "commercial pest management",
    "rat and rodent control",
    "mosquito fogging services",
    "Jogeshwari pest control",
    "Western Suburbs pest control"
  ],
  metadataBase: new URL("https://ssglobalpestscontrolservices.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "S.S Global Pest Control Services",
    description: "Certified, odorless, and eco-friendly pest control & termite treatment across Mumbai.",
    url: "https://ssglobalpestscontrolservices.com",
    siteName: "S.S Global Pest Control Services",
    locale: "en_IN",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("min-h-screen bg-background font-sans antialiased flex flex-col", inter.variable)}>
        <Header />
        <main className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileBar />
        <FloatingWhatsApp />
        <Toaster position="bottom-center" richColors />
      </body>
    </html>
  );
}
