"use client";

import { useState } from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const scenarios = [
  {
    id: "kitchen",
    label: "Kitchen Infestation",
    before: "/images/kitchen_before.jpg",
    after: "/images/kitchen_after.jpg",
    altBefore: "Kitchen with pests",
    altAfter: "Clean sanitized kitchen"
  },
  {
    id: "termite",
    label: "Termite Damage",
    before: "/images/termite_before.jpg",
    after: "/images/termite_after.jpg",
    altBefore: "Wood with termite damage",
    altAfter: "Restored wood"
  },
  {
    id: "upholstery",
    label: "Bed Bug Sofa",
    before: "/images/bedbug_before.jpg",
    after: "/images/bedbug_after.jpg",
    altBefore: "Sofa before treatment",
    altAfter: "Clean sofa after treatment"
  }
];

export function BeforeAfterVisualizer() {
  const [activeScenario, setActiveScenario] = useState(scenarios[0].id);
  const currentData = scenarios.find(s => s.id === activeScenario) || scenarios[0];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trustBlue mb-4">See The Difference</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Slide to see real results from our intensive treatments.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue={scenarios[0].id} onValueChange={(v) => setActiveScenario(v)} className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-3">
              {scenarios.map((s) => (
                <TabsTrigger key={s.id} value={s.id}>{s.label}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            {/* Badges overlay */}
            <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur text-white px-4 py-1.5 rounded-full text-sm font-semibold pointer-events-none">
              Before
            </div>
            <div className="absolute top-4 right-4 z-10 bg-ecoGreen/90 backdrop-blur text-white px-4 py-1.5 rounded-full text-sm font-semibold pointer-events-none">
              After
            </div>

            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={currentData.before} alt={currentData.altBefore} />}
              itemTwo={<ReactCompareSliderImage src={currentData.after} alt={currentData.altAfter} />}
              className="h-[400px] md:h-[600px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
