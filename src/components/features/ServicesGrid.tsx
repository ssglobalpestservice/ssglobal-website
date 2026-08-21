"use client";

import { services } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { BookingModal } from "./BookingModal";

export function ServicesGrid() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trustBlue mb-4">Our Comprehensive Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Tailored pest control programs for both homes and businesses.</p>
        </div>

        <Tabs defaultValue="residential" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-2 h-14">
              <TabsTrigger value="residential" className="text-lg h-full">Residential</TabsTrigger>
              <TabsTrigger value="commercial" className="text-lg h-full">Commercial</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="residential" className="animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.residential.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="commercial" className="animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.commercial.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: { title: string; image: string; description: string; highlights: string[] } }) {
  return (
    <Card className="overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 group border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.title} - Professional pest management in Mumbai`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{service.title}</h3>
      </div>
      <CardContent className="flex-1 p-6">
        <p className="text-gray-600 mb-6">{service.description}</p>
        <ul className="space-y-3">
          {service.highlights.map((highlight: string, idx: number) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
              <CheckCircle2 className="h-5 w-5 text-ecoGreen shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <BookingModal defaultService={service.title}>
          <Button className="w-full bg-trustBlue hover:bg-trustBlue/90">
            Enquire Now
          </Button>
        </BookingModal>
      </CardFooter>
    </Card>
  );
}
