export const services = {
  residential: [
    {
      id: "res-1",
      title: "Ticks Pest Control",
      description: "Specialized treatments to eliminate ticks and maintain a safe, healthy environment.",
      highlights: ["Pet & Child Safe", "Indoor & Outdoor", "Long-lasting Protection"],
      image: "/images/ticks.jpg",
    },
    {
      id: "res-2",
      title: "Mosquito Pest Control",
      description: "Effective mosquito control solutions to reduce breeding and protect against diseases.",
      highlights: ["Thermal Fogging", "Source Reduction", "Prevent Dengue/Malaria"],
      image: "/images/mosquito.jpg",
    },
    {
      id: "res-3",
      title: "Rats Pest Control",
      description: "Professional rodent control services to eliminate rats and prevent property damage.",
      highlights: ["Strategic Trapping", "Safe Bait Stations", "Entry Point Sealing"],
      image: "/images/rats.jpg",
    },
    {
      id: "res-4",
      title: "Ant Pest Control",
      description: "Targeted treatments to remove ant colonies from homes and commercial spaces.",
      highlights: ["Colony Eradication", "Odorless Gel", "Food-Safe Treatment"],
      image: "/images/ants.jpg",
    },
    {
      id: "res-5",
      title: "Termites Pest Control",
      description: "Advanced anti-termite treatments to protect buildings and wooden structures.",
      highlights: ["Drill-Fill-Seal Tech", "Long-term Protection", "Structural Safety"],
      image: "/images/termites.jpg",
    },
    {
      id: "res-6",
      title: "Cockroaches Pest Control",
      description: "Effective treatments to eliminate cockroach infestations and maintain hygiene.",
      highlights: ["Odorless Gel Baiting", "Safe for Kitchens", "Complete Elimination"],
      image: "/images/cockroaches.jpg",
    },
    {
      id: "res-7",
      title: "Bed Bugs Pest Control",
      description: "Powerful pest control solutions to eliminate bed bugs completely from your space.",
      highlights: ["Deep Penetration", "Eggs Eradication", "Sleep Peacefully"],
      image: "/images/bedbugs.jpg",
    },
  ],
  commercial: [
    {
      id: "com-1",
      title: "Rodent Control",
      description: "Strategic baiting and trapping for warehouses and offices.",
      highlights: ["Discreet Setup", "Monthly Audits", "FSSAI Compliant"],
      image: "/images/commercial_rodent.jpg",
    },
    {
      id: "com-2",
      title: "Mosquito Management",
      description: "Fogging and larvicidal treatments for large compounds.",
      highlights: ["Thermal Fogging", "Source Reduction", "Prevent Dengue/Malaria"],
      image: "/images/commercial_mosquito.jpg",
    },
    {
      id: "com-3",
      title: "Cockroach Gel Treatment",
      description: "Heavy-duty gel baiting for restaurant kitchens and food processing units.",
      highlights: ["HACCP Approved", "No Odor", "Night Service Available"],
      image: "/images/commercial_cockroach.jpg",
    },
  ]
};

export const reviews = [
  {
    id: 1,
    name: "Local Customer",
    location: "Jogeshwari",
    rating: 5,
    text: "[PASTE REAL REVIEW FROM GOOGLE LINK HERE]",
  },
  {
    id: 2,
    name: "Local Customer",
    location: "Goregaon",
    rating: 5,
    text: "[PASTE REAL REVIEW FROM GOOGLE LINK HERE]",
  },
  {
    id: 3,
    name: "Local Customer",
    location: "Malad",
    rating: 5,
    text: "[PASTE REAL REVIEW FROM GOOGLE LINK HERE]",
  },
  {
    id: 4,
    name: "Local Customer",
    location: "Andheri",
    rating: 5,
    text: "[PASTE REAL REVIEW FROM GOOGLE LINK HERE]",
  },
];

export const pestsData = {
  locations: [
    { id: "kitchen", label: "Kitchen" },
    { id: "bedroom", label: "Bedroom" },
    { id: "bathroom", label: "Bathroom" },
    { id: "furniture", label: "Furniture/Woodwork" },
    { id: "outdoor", label: "Outdoor/Garden" },
  ],
  signs: {
    kitchen: [
      { id: "small-crawling", label: "Small crawling insects", result: "German Cockroaches", treatment: "Herbal Gel Treatment" },
      { id: "droppings", label: "Droppings/gnawing", result: "Rodents (Mice/Rats)", treatment: "Baiting & Trapping Strategy" },
    ],
    bedroom: [
      { id: "biting", label: "Biting bugs in mattress", result: "Bed Bugs", treatment: "Intensive 2-Step Treatment" },
      { id: "small-crawling", label: "Small crawling insects", result: "Ants/Cockroaches", treatment: "Herbal Spray" },
    ],
    bathroom: [
      { id: "silver-bugs", label: "Silver, fast-moving bugs", result: "Silverfish", treatment: "Targeted Chemical Spray" },
      { id: "drain-flies", label: "Small flies near drain", result: "Drain Flies", treatment: "Drain Foaming Treatment" },
    ],
    furniture: [
      { id: "wood-dust", label: "Wood dust/hollow sound", result: "Termites", treatment: "Drill-Fill-Seal Anti-Termite" },
      { id: "holes", label: "Tiny round holes in wood", result: "Wood Borers", treatment: "Chemical Injection" },
    ],
    outdoor: [
      { id: "buzzing", label: "Buzzing/Stinging flying insects", result: "Mosquitoes/Bees", treatment: "Thermal Fogging / Hive Removal" },
      { id: "nests", label: "Mud tubes or nests", result: "Termites or Wasps", treatment: "Inspection Required" },
    ]
  }
};
