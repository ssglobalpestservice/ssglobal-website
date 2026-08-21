export const services = {
  residential: [
    {
      id: "res-1",
      title: "Herbal Pest Control",
      description: "100% odorless, eco-friendly treatment for common household pests.",
      highlights: ["100% Odorless", "Pet & Child Safe", "No need to empty kitchen"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=400&h=300",
    },
    {
      id: "res-2",
      title: "Termite Treatment",
      description: "Advanced Drill-Fill-Seal technology to eradicate termites from the root.",
      highlights: ["Drill-Fill-Seal Tech", "Up to 2-Year Warranty", "Free Inspection"],
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=400&h=300",
    },
    {
      id: "res-3",
      title: "Bed Bug Eradication",
      description: "Intensive chemical and heat treatment to eliminate bed bugs in all life stages.",
      highlights: ["2-Step Process", "Complete Eradication", "Sleep Peacefully"],
      image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80&w=400&h=300",
    },
  ],
  commercial: [
    {
      id: "com-1",
      title: "Rodent Control",
      description: "Strategic baiting and trapping for warehouses and offices.",
      highlights: ["Discreet Setup", "Monthly Audits", "FSSAI Compliant"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=400&h=300",
    },
    {
      id: "com-2",
      title: "Mosquito Management",
      description: "Fogging and larvicidal treatments for large compounds.",
      highlights: ["Thermal Fogging", "Source Reduction", "Prevent Dengue/Malaria"],
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=400&h=300",
    },
    {
      id: "com-3",
      title: "Cockroach Gel Treatment",
      description: "Heavy-duty gel baiting for restaurant kitchens and food processing units.",
      highlights: ["HACCP Approved", "No Odor", "Night Service Available"],
      image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80&w=400&h=300",
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
