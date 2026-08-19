"use client";

import { useState } from "react";
import { pestsData } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, Search, CheckCircle2, ChevronRight } from "lucide-react";
import { BookingModal } from "./BookingModal";

interface Location {
  id: string;
  label: string;
}

interface Sign {
  id: string;
  label: string;
  result: string;
  treatment: string;
}

export function PestIdentifier() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedSign, setSelectedSign] = useState<Sign | null>(null);

  const handleLocationSelect = (locId: string) => {
    setSelectedLocation(locId);
    setStep(2);
  };

  const handleSignSelect = (sign: Sign) => {
    setSelectedSign(sign);
    setStep(3);
  };

  const resetWizard = () => {
    setStep(1);
    setSelectedLocation(null);
    setSelectedSign(null);
  };

  return (
    <section className="py-20 bg-white" id="pest-identifier">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trustBlue mb-4">Identify Your Pest Problem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Not sure what&apos;s bugging you? Use our quick identifier to find the right solution in seconds.</p>
        </div>

        <Card className="border-2 border-gray-100 shadow-xl overflow-hidden transition-all duration-300">
          <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Step {step} of 3</span>
            {step > 1 && (
              <Button variant="ghost" size="sm" onClick={() => setStep(step === 3 ? 2 : 1)} className="text-gray-500 hover:text-trustBlue">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
            )}
          </div>
          
          <CardContent className="p-8">
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <CardTitle className="text-2xl mb-6 text-center">Where did you spot the pest?</CardTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {pestsData.locations.map((loc: Location) => (
                    <Button
                      key={loc.id}
                      variant="outline"
                      className="h-16 text-lg justify-start hover:border-trustBlue hover:bg-trustBlue/5 transition-all group"
                      onClick={() => handleLocationSelect(loc.id)}
                    >
                      <Search className="mr-3 h-5 w-5 text-gray-400 group-hover:text-trustBlue" />
                      {loc.label}
                      <ChevronRight className="ml-auto h-5 w-5 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && selectedLocation && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <CardTitle className="text-2xl mb-6 text-center">What does it look like / Signs?</CardTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(pestsData.signs as Record<string, Sign[]>)[selectedLocation].map((sign: Sign) => (
                    <Button
                      key={sign.id}
                      variant="outline"
                      className="h-auto py-4 text-left justify-start hover:border-alertOrange hover:bg-alertOrange/5 transition-all items-start group"
                      onClick={() => handleSignSelect(sign)}
                    >
                      <CheckCircle2 className="mr-3 h-5 w-5 mt-0.5 text-gray-400 group-hover:text-alertOrange shrink-0" />
                      <span className="whitespace-normal leading-tight">{sign.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && selectedSign && (
              <div className="animate-in fade-in zoom-in-95 duration-500 text-center py-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
                  <Search className="h-10 w-10 text-red-600" />
                </div>
                <CardTitle className="text-3xl mb-2 text-gray-900">It looks like: <span className="text-red-600">{selectedSign.result}</span></CardTitle>
                <CardDescription className="text-lg mb-8 max-w-lg mx-auto">
                  Based on your answers, we recommend our specialized <strong>{selectedSign.treatment}</strong>.
                </CardDescription>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <BookingModal defaultService={selectedSign.treatment}>
                    <Button size="lg" className="bg-alertOrange hover:bg-alertOrange/90 text-white h-12 px-8">
                      Get Instant Solution for {selectedSign.result}
                    </Button>
                  </BookingModal>
                  <Button size="lg" variant="outline" onClick={resetWizard} className="h-12">
                    Start Over
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
