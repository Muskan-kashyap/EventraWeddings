export const VENDORS = [
  {
    id: 1,
    name: "Patna Royal Banquet",
    category: "Venue",
    location: "Bailey Road, Patna",
    price: "₹1,50,000",
    rating: 4.8,
    reviews: 120,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80",
    verified: true,
    description: "The premier wedding venue in Patna, offering a capacity for 1000+ guests. Fully air-conditioned halls and beautiful outdoor lawns perfect for traditional Bihari ceremonies like Chhath Puja and Tilak. Package includes in-house catering and basic decor.",
    minCapacity: 300,
    maxCapacity: 1200,
    services: ["Banquet Hall", "Outdoor Lawn", "In-house Catering", "Valet Parking", "Bridal Room"],
    gallery: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1627916694770-f844784a32e1?auto=format&fit=crop&w=800&q=80", 
      "https://images.unsplash.com/photo-1549488349-e3803859582d?auto=format&fit=crop&w=800&q=80",  
      "https://images.unsplash.com/photo-1548175402-d9c882195f26?auto=format&fit=crop&w=800&q=80", 
    ],
  },
  {
    id: 2,
    name: "Mithila Moments Photography",
    category: "Photography",
    location: "Kankarbagh, Patna",
    price: "₹40,000 / day",
    rating: 4.9,
    reviews: 85,
    image: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&w=600&q=80",
    verified: true,
    description: "Capturing the emotion and vibrancy of Bihari weddings with cinematic finesse. Specializing in pre-wedding shoots across scenic locations like the Ganga riverfront. Our team ensures timely delivery of high-resolution albums and 4K wedding films.",
    services: ["Candid Photography", "Traditional Photography", "Drone Coverage", "4K Videography", "Same-day Edits (SDE)"],
    gallery: [
      "https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549556846-976ff16d3f25?auto=format&fit=crop&w=800&q=80", // Couple shot
      "https://images.unsplash.com/photo-1511210167180-f38b16e8869c?auto=format&fit=crop&w=800&q=80", // Haldi shot
      "https://images.unsplash.com/photo-1557091515-8167f897621c?auto=format&fit=crop&w=800&q=80", // Group shot
    ],
  },
  {
    id: 3,
    name: "Sharda Decorators",
    category: "Decor",
    location: "Muzaffarpur City",
    price: "₹25,000 Onwards",
    rating: 4.5,
    reviews: 40,
    image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=600&q=80",
    verified: false,
    description: "Specialists in budget-friendly yet gorgeous stage and mandap decoration, particularly skilled in creating traditional flower arrangements and theme-based lighting. Service available across Muzaffarpur, Darbhanga, and Samastipur.",
    services: ["Mandap Decor", "Stage Setup", "Floral Design", "Lighting & Sound", "Entrance Gate Decor"],
    gallery: [
      "https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587524933096-724d271295f5?auto=format&fit=crop&w=800&q=80", // Stage closeup
      "https://images.unsplash.com/photo-1582218155986-e415e98f0608?auto=format&fit=crop&w=800&q=80", // Seating
      "https://images.unsplash.com/photo-1616782522538-4c9c1f6d34e6?auto=format&fit=crop&w=800&q=80", // Mandap
    ],
  },
  {
    id: 4,
    name: "Pandit Ji - Jha Brothers",
    category: "Pandit",
    location: "Darbhanga",
    price: "₹11,000",
    rating: 5.0,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1609103466266-449f29527581?auto=format&fit=crop&w=600&q=80",
    verified: true,
    description: "Highly revered family of Pandits, fluent in Maithili and Hindi, specializing in complex traditional wedding rituals including Tilak, Haldi, Vivah Sanskar, and Griha Pravesh. Known for timely and meticulous performance of all customs.",
    services: ["Vivah Sanskar", "Tilak Ceremony", "Griha Pravesh", "Satyanarayan Puja", "Horoscope Matching"],
    gallery: [
      "https://images.unsplash.com/photo-1609103466266-449f29527581?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1634842100868-80f2d8a1f861?auto=format&fit=crop&w=800&q=80", // Puja Items
      "https://images.unsplash.com/photo-1618035252674-4b53112d09e5?auto=format&fit=crop&w=800&q=80", // Havan
      "https://images.unsplash.com/photo-1609103466266-449f29527581?auto=format&fit=crop&w=800&q=80", // Repeating main image for symmetry
    ],
  },
  {
    id: 5,
    name: "Patna Royal Banquet",
    category: "Venue",
    location: "Bailey Road, Patna",
    price: "₹1,50,000",
    rating: 4.8,
    reviews: 120,
    // Add VDP Specific details:
    description: "The premier wedding venue in Patna, offering a capacity for 1000+ guests. Fully air-conditioned halls and beautiful outdoor lawns perfect for traditional Bihari ceremonies like Chhath Puja and Tilak. Package includes in-house catering and basic decor.",
    minCapacity: 300,
    maxCapacity: 1200,
    services: ["Banquet Hall", "Outdoor Lawn", "In-house Catering", "Valet Parking", "Bridal Room"],
    gallery: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1627916694770-f844784a32e1?auto=format&fit=crop&w=800&q=80", // Indoor shot
      "https://images.unsplash.com/photo-1549488349-e3803859582d?auto=format&fit=crop&w=800&q=80",  // Decor shot
      "https://images.unsplash.com/photo-1548175402-d9c882195f26?auto=format&fit=crop&w=800&q=80", // Food shot
    ],
    verified: true,
  },
];
// Helper function to simulate API fetch
export const getVendorById = (id) => {
  return VENDORS.find(vendor => vendor.id === parseInt(id));
};