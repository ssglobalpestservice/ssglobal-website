import { HeroSection } from "@/components/features/HeroSection";
import { PestIdentifier } from "@/components/features/PestIdentifier";
import { BeforeAfterVisualizer } from "@/components/features/BeforeAfterVisualizer";
import { ServicesGrid } from "@/components/features/ServicesGrid";
import { HowWeWork } from "@/components/features/HowWeWork";
import { ReviewsSection } from "@/components/features/ReviewsSection";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "S.S Global Pest Control Services",
    "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d",
    "description": "S.S Global Pest Control Services offers certified, odorless, and eco-friendly pest control & termite treatment across Mumbai, Thane, and Navi Mumbai.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No 3, C Wing, Aradhana Building, Near Oshiwara Metro Station",
      "addressLocality": "Jogeshwari West, Mumbai",
      "postalCode": "400102",
      "addressCountry": "IN"
    },
    "telephone": "+919324780380"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroSection />
      <PestIdentifier />
      <BeforeAfterVisualizer />
      <ServicesGrid />
      <HowWeWork />
      <ReviewsSection />
    </div>
  );
}
