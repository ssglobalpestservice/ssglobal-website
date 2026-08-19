import { Button } from "@/components/ui/button";
import { ShieldCheck, Star, Users, Award } from "lucide-react";
import Image from "next/image";

import { BookingModal } from "./BookingModal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-trustBlue/5 py-20 md:py-32">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 relative z-10">
          <div className="inline-flex items-center rounded-full border border-ecoGreen/30 bg-ecoGreen/10 px-3 py-1 text-sm text-ecoGreen">
            <ShieldCheck className="mr-2 h-4 w-4" />
            Safe, Eco-Friendly, Odorless
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            Complete Protection from <span className="text-alertOrange">Pests.</span> Guaranteed.
          </h1>
          
          <p className="text-lg text-gray-600 md:text-xl max-w-lg">
            Enterprise-grade pest control solutions for your home and business. Get rid of termites, bed bugs, cockroaches, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <BookingModal>
              <Button size="lg" className="bg-alertOrange hover:bg-alertOrange/90 text-white h-14 px-8 text-lg">
                Book Free Inspection
              </Button>
            </BookingModal>
            <a href="tel:+919324780380">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-trustBlue text-trustBlue hover:bg-trustBlue hover:text-white h-14 px-8 text-lg" 
              >
                Call Now / WhatsApp
              </Button>
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gray-200">
            <div className="flex flex-col gap-1">
              <span className="font-bold text-xl text-gray-900 flex items-center gap-1">14+ <Award className="h-5 w-5 text-alertOrange"/></span>
              <span className="text-sm text-gray-500">Years Exp.</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-xl text-gray-900 flex items-center gap-1">5000+ <Users className="h-5 w-5 text-trustBlue"/></span>
              <span className="text-sm text-gray-500">Homes Treated</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-xl text-gray-900 flex items-center gap-1">4.9 <Star className="h-5 w-5 text-yellow-500 fill-yellow-500"/></span>
              <span className="text-sm text-gray-500">Google Rating</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-xl text-gray-900 flex items-center gap-1">Govt <ShieldCheck className="h-5 w-5 text-ecoGreen"/></span>
              <span className="text-sm text-gray-500">Certified</span>
            </div>
          </div>
        </div>
        
        <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000&h=1200"
            alt="Professional pest control technician spraying safe chemicals in a modern kitchen"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="bg-ecoGreen/20 p-3 rounded-full">
                <ShieldCheck className="h-6 w-6 text-ecoGreen" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">100% Safe for Pets & Children</p>
                <p className="text-sm text-gray-600">Using WHO-approved eco-friendly chemicals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
