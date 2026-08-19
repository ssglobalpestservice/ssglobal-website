import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import { BookingModal } from "@/components/features/BookingModal";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.jpg" alt="S.S Global Pest Control Services" width={200} height={60} className="w-auto h-12 object-contain mix-blend-multiply" priority />
        </Link>
        
        <nav className="hidden md:flex gap-6">
          <Link href="#services" className="text-sm font-medium hover:text-ecoGreen transition-colors">Services</Link>
          <Link href="#process" className="text-sm font-medium hover:text-ecoGreen transition-colors">How We Work</Link>
          <Link href="#reviews" className="text-sm font-medium hover:text-ecoGreen transition-colors">Reviews</Link>
          <Link href="#areas" className="text-sm font-medium hover:text-ecoGreen transition-colors">Service Areas</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+919324780380">
            <Button 
              variant="outline" 
              className="hidden md:flex border-trustBlue text-trustBlue hover:bg-trustBlue hover:text-white transition-colors"
            >
              <Phone className="mr-2 h-4 w-4" />
              +91 93247 80380
            </Button>
          </a>
          <BookingModal>
            <Button className="hidden md:flex bg-alertOrange hover:bg-alertOrange/90 text-white">
              Consult With Us
            </Button>
          </BookingModal>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
