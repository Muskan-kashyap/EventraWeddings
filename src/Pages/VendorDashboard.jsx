import { useState } from 'react';
import './VendorDashboard.css';
import DashboardHome from '../Components/DashboardHome';
import VendorProfile from '../Components/VendorProfile';
import VendorBooking from '../Components/VendorBooking';
import VendorPayments from '../Components/VendorPayments';

// Vendor-specific navigation links
const DASHBOARD_NAV = [
  { id: 'home', label: 'Dashboard Home', icon: '🏠' },
  { id: 'profile', label: 'Profile (Edit)', icon: '✏️' },
  { id: 'bookings', label: 'Bookings List', icon: '🗓️' },
  { id: 'payments', label: 'Payment Status', icon: '💳' },
];

const VendorDashboard = () => {
  const [activeSection, setActiveSection] = useState('home'); 

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <DashboardHome />;
      case 'profile':
        return <VendorProfile />;
      case 'bookings':
        return <VendorBooking />;
      case 'payments':
        return <VendorPayments />; // Renders the final component
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="dashboard-container">
      
      <div className="dashboard-layout">
        
        {/* LEFT COLUMN: Navigation Sidebar */}
        <aside className="dashboard-nav">
          <h2 className="dashboard-logo">Vendor Hub</h2>
          <div className="vendor-info">
            <span className="vendor-icon">👨‍💼</span>
            <p className="vendor-name-placeholder">Vendor Name, Patna</p>
          </div>
          
          <nav className="nav-links">
            {DASHBOARD_NAV.map((item) => (
              <a 
                key={item.id} 
                href="#!" 
                onClick={() => setActiveSection(item.id)}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.icon} {item.label}
              </a>
            ))}
          </nav>
          
          <button className="btn-dashboard-logout">
            Logout
          </button>
        </aside>

        {/* RIGHT COLUMN: Main Content Area */}
        <main className="dashboard-main-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default VendorDashboard;