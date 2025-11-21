import { useState } from 'react';
import './AdminDashboard.css';
import AdminHome from '../Components/AdminHome'; 
import AdminVendors from '../Components/AdminVendors'; 
import AdminCustomers from '../Components/AdminCustomers'; 

// Admin-specific navigation links
const ADMIN_NAV = [
  { id: 'dashboard', label: 'Admin Dashboard', icon: '📊' },
  { id: 'vendors', label: 'Manage Vendors', icon: '📝' },
  { id: 'customers', label: 'Manage Customers', icon: '👤' },
];

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard'); 

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <AdminHome />;
      case 'vendors':
        return <AdminVendors />;
      case 'customers':
        return <AdminCustomers />;
      default:
        return <AdminHome />;
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-layout">
        
        {/* LEFT COLUMN: Admin Navigation */}
        <aside className="admin-nav">
          <h2 className="admin-logo">Admin Panel</h2>
          <nav className="nav-links">
            {ADMIN_NAV.map((item) => (
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
          <button className="btn-admin-logout">Logout</button>
        </aside>

        {/* RIGHT COLUMN: Main Content Area */}
        <main className="admin-main-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;