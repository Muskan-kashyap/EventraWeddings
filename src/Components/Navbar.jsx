import { useState } from 'react'; // ADD useState
import { Link } from 'react-router-dom'; 
import './Navbar.css'; 

const NAV_LINKS = [
  { label: 'Vendors', path: '/vendors', isSearch: false },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); 
  const [searchTerm, setSearchTerm] = useState(''); 
  
  const toggleMenu = () => { setIsMobileMenuOpen(!isMobileMenuOpen); };
  const toggleSearch = () => { setIsSearchOpen(!isSearchOpen); }; 

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      console.log("Searching for:", searchTerm);
      alert(`Navigating to /vendors?q=${searchTerm}`);
    }
  };

  return (
    <header className="navbar-container">
      <div className="navbar-content">
        
        {/* BRANDING (Remains the same) */}
        <Link to="/" className="navbar-brand">
          <div className="logo-box">EW</div>
          <div className="brand-text-container">
            <h1 className="brand-name">Eventra<span className="brand-highlight">Weddings</span></h1>
          </div>
        </Link>
        
        {/* HAMBURGER ICON... (same) */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          {/* ... bars... */}
        </div>

        {/* NAVIGATION LINKS */}
        <nav className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            
            {/* Dynamic Menu Items */}
            {NAV_LINKS.map((link, index) => (
              <li key={index} className="nav-item">
                <Link to={link.path} className="nav-link">
                  {link.label}
                </Link>
              </li>
            ))}

            {/* SLEEK SEARCH IMPLEMENTATION */}
            <li className={`nav-item nav-search-item ${isSearchOpen ? 'active' : ''}`}>
                <button onClick={toggleSearch} className="search-toggle-btn">
                  🔍
                </button>
                {/* Expanding Input Field */}
                <form onSubmit={handleSearchSubmit} className="search-form">
                    <input
                        type="text"
                        placeholder="Search vendors..."
                        className={`search-input ${isSearchOpen ? 'expanded' : ''}`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </form>
            </li>

            {/* The Vertical Divider */}
            <li className="nav-divider"></li>

            {/* Login Link */}
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>

            {/* 'Are you a vendor?' Link */}
            <li className="nav-item">
              <Link to="/vendor-register" className="vendor-link">
                Are you a vendor?
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;