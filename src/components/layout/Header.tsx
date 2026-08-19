import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import { BookingModal } from "@/components/features/BookingModal";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4 h-24 md:h-28 flex items-center justify-between py-2">
        <Link href="/" className="flex items-center gap-4">
          <Image 
            src="/images/logo-transparent.png" 
            alt="S.S Global Logo" 
            width={120} 
            height={120} 
            className="w-auto h-20 md:h-24 object-contain" 
            priority 
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg md:text-2xl text-trustBlue tracking-tight leading-none">S.S Global</span>
            <span className="font-bold text-xs md:text-sm text-ecoGreen mt-1 uppercase tracking-wide">Pest Control Services</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex gap-6">
          <a href="#services" className="text-sm font-medium hover:text-ecoGreen transition-colors">Services</a>
          <a href="#process" className="text-sm font-medium hover:text-ecoGreen transition-colors">How We Work</a>
          <a href="#reviews" className="text-sm font-medium hover:text-ecoGreen transition-colors">Reviews</a>
          <a href="#areas" className="text-sm font-medium hover:text-ecoGreen transition-colors">Service Areas</a>
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
