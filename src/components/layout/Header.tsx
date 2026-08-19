import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import { BookingModal } from "@/components/features/BookingModal";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/images/logo.jpg" 
            alt="S.S Global Logo" 
            width={100} 
            height={100} 
            className="w-auto h-16 md:h-20 object-contain mix-blend-multiply" 
            priority 
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg md:text-2xl text-trustBlue tracking-tight leading-none">S.S Global</span>
            <span className="font-bold text-xs md:text-sm text-ecoGreen mt-1 uppercase tracking-wide">Pest Control Services</span>
          </div>
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
