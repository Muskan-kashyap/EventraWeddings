import './Categories.css';

const SERVICE_CATEGORIES = [
  { 
    id: 1, 
    title: "Venues", 
    icon: "🏰", 
    image: "/Venues.avif",
    count: "120+ Listings"
  },
  { 
    id: 2, 
    title: "Catering (Halwai)", 
    icon: "🍲", 
    image: "/Catering.avif",
    count: "85+ Listings"
  },
  { 
    id: 3, 
    title: "Photography", 
    icon: "📸", 
    image: "/Photography.jpeg",
    count: "200+ Listings"
  },
  { 
    id: 4, 
    title: "Bridal Makeup", 
    icon: "💄", 
    image: "/BridalMakeup.jpeg",
    count: "95+ Listings"
  },
  { 
    id: 5, 
    title: "Decorators", 
    icon: "✨", 
    image: "/Decoration.jpeg",
    count: "60+ Listings"
  },
  { 
    id: 6, 
    title: "Pandit & Puja", 
    icon: "🔥", 
    image: "/Pandit.jpeg",
    count: "40+ Listings"
  }
];

const Categories = () => {
  return (
    <section className="categories-section">
      <div className="categories-header">
        <h2 className="section-title">Essential Wedding Services</h2>
        <p className="section-subtitle">Everything you need for a traditional celebration</p>
      </div>

      <div className="categories-grid">
        {SERVICE_CATEGORIES.map((category) => (
          <div key={category.id} className="category-card">
            <div className="image-wrapper">
              <img src={category.image} alt={category.title} className="cat-img" />
              <div className="overlay">
                <span className="cat-icon">{category.icon}</span>
              </div>
            </div>
            <h3 className="cat-title">{category.title}</h3>
            <span className="cat-count">{category.count}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;