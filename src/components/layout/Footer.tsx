import Link from "next/link";

export function Footer() {
  const serviceAreas = [
    "Jogeshwari", "Goregaon", "Malad", "Kandivali", "Borivali", 
    "Andheri", "Bandra", "Thane", "Navi Mumbai"
  ];

  return (
    <footer className="bg-trustBlue text-white pt-16 pb-24 md:pb-8" id="areas">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">S.S Global Pest Control Services</h3>
          <p className="text-gray-300 text-sm mb-4 font-medium italic">
            &quot;Protecting your space, protecting your health&quot;
          </p>
          <p className="text-gray-300 text-sm mb-4">
            Enterprise-grade pest control solutions for residential and commercial properties. Safe, effective, and guaranteed results.
          </p>
          <p className="text-gray-300 text-sm">
            ISO 9001:2015 Certified<br/>
            14+ Years Experience
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-4 text-ecoGreen">Our Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="#services" className="hover:text-white transition-colors">Herbal Pest Control</Link></li>
            <li><Link href="#services" className="hover:text-white transition-colors">Termite (Drill-Fill-Seal)</Link></li>
            <li><Link href="#services" className="hover:text-white transition-colors">Bed Bug Treatment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4 text-ecoGreen">Service Areas</h4>
          <p className="text-sm text-gray-300 mb-2">Proudly serving all over Mumbai:</p>
          <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300">
            {serviceAreas.map((area) => (
              <li key={area}>
                <Link href={`#areas`} className="hover:text-white transition-colors">{area}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4 text-ecoGreen">Contact Us</h4>
          <address className="not-italic text-sm text-gray-300 space-y-2">
            <p>Shop No 3, C Wing, Aradhana Building</p>
            <p>Near Oshiwara Metro Station, Jogeshwari West</p>
            <p>Mumbai 400102</p>
            <p className="pt-2">Phone: <a href="tel:+919324780380" className="hover:text-white">+91 93247 80380</a> / <a href="tel:+919372989079" className="hover:text-white">93729 89079</a></p>
            <p>Email: <a href="mailto:info@SSGlobalPestcontrolservice.com" className="hover:text-white">info@SSGlobalPestcontrolservice.com</a></p>
            <div className="flex gap-4 pt-4">
              <a href="https://instagram.com/ssglobalpestcontrolservice" target="_blank" rel="noopener noreferrer" className="hover:text-ecoGreen">Instagram</a>
              <a href="https://facebook.com/ssglobalpestcontrolservice" target="_blank" rel="noopener noreferrer" className="hover:text-ecoGreen">Facebook</a>
            </div>
          </address>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/20 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} S.S Global Pest Control Services. All rights reserved.</p>
      </div>
    </footer>
  );
}
