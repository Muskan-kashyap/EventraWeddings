import './Profile.css';
import { Link } from 'react-router-dom';

// --- Mock Data Simulation ---
const USER_INFO = {
  name: "Sita Devi",
  email: "sita.devi@biharweddings.com",
  memberSince: "Jan 2024",
};

const USER_BOOKINGS = [
  {
    id: 'B1001',
    vendorName: "Patna Royal Banquet",
    category: "Venue",
    date: "2025-12-15",
    totalPrice: "₹1,77,000",
    status: "Confirmed",
  },
  {
    id: 'B1002',
    vendorName: "Mithila Moments Photography",
    category: "Photography",
    date: "2025-02-05",
    totalPrice: "₹40,000",
    status: "Completed",
  },
  {
    id: 'B1003',
    vendorName: "Sharda Decorators",
    category: "Decor",
    date: "2025-03-20",
    totalPrice: "₹25,000",
    status: "Cancelled",
  },
];

const Profile = () => {
  return (
    <div className="profile-page-container">
      
      <div className="profile-header">
        <h1>Welcome Back, {USER_INFO.name}</h1>
        <p>Member since: {USER_INFO.memberSince}</p>
      </div>

      <div className="profile-content-layout">
        
        {/* LEFT COLUMN: Profile Navigation */}
        <aside className="profile-nav">
          <Link to="/profile/bookings" className="nav-link active">My Bookings</Link>
          <Link to="/profile/favorites" className="nav-link">Favorite Vendors</Link>
          <Link to="/profile/settings" className="nav-link">Account Settings</Link>
          <button className="btn-logout">Logout</button>
        </aside>

        {/* RIGHT COLUMN: Main Content/Bookings List */}
        <main className="profile-main-area">
          <h2>My Bookings ({USER_BOOKINGS.length})</h2>
          
          <div className="bookings-list">
            {USER_BOOKINGS.map((booking) => (
              <div key={booking.id} className="booking-card">
                <div className="booking-details">
                  <span className="booking-id"># {booking.id}</span>
                  <h3 className="vendor-title">
                    {booking.vendorName} ({booking.category})
                  </h3>
                  <p className="booking-info">
                    Event Date: <strong>{booking.date}</strong> | Total: <strong>{booking.totalPrice}</strong>
                  </p>
                </div>
                
                <div className={`booking-status status-${booking.status.toLowerCase()}`}>
                  {booking.status}
                </div>
                
                <button className="btn-view">View Details</button>
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
};

export default Profile;