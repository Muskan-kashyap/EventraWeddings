import { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [searchParams, setSearchParams] = useState({
    location: 'Patna',
    category: ''
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchParams);
    alert(`Searching for ${searchParams.category} in ${searchParams.location}`);
  };

  return (
    <section className="hero-container">
      <div className="hero-overlay">
        <div className="hero-content">
          
          {/* Headlines */}
          <h1 className="hero-title">
            Plan Your Dream <br />
            <span className="highlight-text">Mithila Wedding</span>
          </h1>
          <p className="hero-subtitle">
            Find the best Venues, Decorators, and Pandits in Bihar.
          </p>

          {/* Search Widget */}
          <form className="search-widget" onSubmit={handleSearch}>
            
            {/* Location Dropdown */}
            <div className="input-group location-group">
              <label>City</label>
              <select 
                value={searchParams.location}
                onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
              >
                <option value="Patna">Patna</option>
                <option value="Muzaffarpur">Muzaffarpur</option>
                <option value="Gaya">Gaya</option>
                <option value="Darbhanga">Darbhanga</option>
                <option value="Bhagalpur">Bhagalpur</option>
              </select>
              <span className="icon">📍</span>
            </div>

            {/* Divider Line (Visual only) */}
            <div className="widget-divider"></div>

            {/* Service Search Input */}
            <div className="input-group service-group">
              <label>Service</label>
              <input id='search-input'
                type="text" 
                placeholder="e.g. Banquet Hall, Makeup Artist..." 
                value={searchParams.category}
                onChange={(e) => setSearchParams({...searchParams, category: e.target.value})}
              />
              <span className="icon">🔍</span>
            </div>

            {/* Search Button */}
            <button type="submit" className="search-btn">
              Check Availability
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Hero;