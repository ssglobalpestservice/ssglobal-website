import { Search, SprayCan, ShieldCheck } from "lucide-react";

export function HowWeWork() {
  const steps = [
    {
      icon: Search,
      title: "Expert Consultation & Assessment",
      description: "Our team assesses your pest problem to identify the exact pest type, source, and severity of the infestation.",
    },
    {
      icon: SprayCan,
      title: "Targeted Odorless Treatment",
      description: "We deploy WHO-approved, eco-friendly gels and sprays that are safe for pets and children.",
    },
    {
      icon: ShieldCheck,
      title: "Long-Term Protection Shield",
      description: "We seal entry points and provide a warranty certificate for lasting peace of mind.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-trustBlue mb-4">Our 3-Step Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">A systematic approach to completely eradicate pests from your property.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200">
              <div className="absolute top-0 left-0 h-full bg-ecoGreen w-full opacity-50"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-ecoGreen flex items-center justify-center mb-6 z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-10 w-10 text-trustBlue" />
                  </div>
                  
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-alertOrange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-20">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
