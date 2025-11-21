import { useState } from 'react';
import './FilterSidebar.css';

const CATEGORIES = ["Venue", "Catering", "Photography", "Decor", "Makeup", "Pandit"];

const FilterSidebar = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    rating: 0,
    priceRange: 'all'
  });

  const handleCheckboxChange = (category) => {
    const updatedCategories = selectedFilters.categories.includes(category)
      ? selectedFilters.categories.filter(c => c !== category)
      : [...selectedFilters.categories, category];
      
    const newFilters = { ...selectedFilters, categories: updatedCategories };
    setSelectedFilters(newFilters);
    onFilterChange(newFilters); // Prop for real-time filtering if needed
  };

  return (
    <aside className="filter-sidebar">
      
      {/* Search & Reset */}
      <div className="filter-group sticky-header">
        <h3>Filter & Refine</h3>
        <button className="reset-btn" onClick={() => setSelectedFilters({ categories: [], rating: 0, priceRange: 'all' })}>
          Reset All
        </button>
      </div>
      
      <div className="filter-scroll-area">
        
        {/* Category Filter */}
        <div className="filter-group">
          <h4>Vendor Category</h4>
          {CATEGORIES.map(category => (
            <label key={category} className="checkbox-label">
              <input 
                type="checkbox"
                checked={selectedFilters.categories.includes(category)}
                onChange={() => handleCheckboxChange(category)}
              />
              {category}
            </label>
          ))}
        </div>

        {/* Rating Filter */}
        <div className="filter-group">
          <h4>Min. Rating</h4>
          {[4, 3, 2].map(star => (
            <label key={star} className="radio-label">
              <input 
                type="radio" 
                name="rating" 
                checked={selectedFilters.rating === star}
                onChange={() => setSelectedFilters({...selectedFilters, rating: star})}
              />
              {'★'.repeat(star)} & Up
            </label>
          ))}
        </div>
        
        {/* Price Range Filter (Dummy) */}
        <div className="filter-group">
          <h4>Price Range (Estimate)</h4>
          {['< ₹50K', '₹50K - ₹1L', '> ₹1L'].map((range, index) => (
            <label key={index} className="radio-label">
              <input 
                type="radio" 
                name="price" 
                checked={selectedFilters.priceRange === range}
                onChange={() => setSelectedFilters({...selectedFilters, priceRange: range})}
              />
              {range}
            </label>
          ))}
        </div>
        
      </div>
    </aside>
  );
};

export default FilterSidebar;