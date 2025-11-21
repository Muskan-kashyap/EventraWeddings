import { useState } from 'react';
import './VendorBooking.css';

// --- Mock Data Simulation for Vendor's Bookings ---
const VENDOR_BOOKINGS = [
  { id: 501, clientName: "Rahul Sharma", eventDate: "2026-01-20", service: "Full Day Photo Package", value: 45000, status: "Confirmed", phone: "9876xxxxxx" },
  { id: 502, clientName: "Priya Singh", eventDate: "2025-12-15", service: "Venue Inquiry", value: 0, status: "New Lead", phone: "9988xxxxxx" },
  { id: 503, clientName: "Vikrant Jha", eventDate: "2025-11-25", service: "Mandap Decoration", value: 30000, status: "Pending", phone: "9000xxxxxx" },
  { id: 504, clientName: "Sonia Verma", eventDate: "2026-03-10", service: "Bridal Makeup Trial", value: 0, status: "New Lead", phone: "8765xxxxxx" },
  { id: 505, clientName: "Amit Gupta", eventDate: "2025-10-01", service: "Venue Rental", value: 180000, status: "Completed", phone: "9123xxxxxx" },
];

const VendorBookings = () => {
  const [filters, setFilters] = useState({ search: '', status: 'All' });
  const [bookings, setBookings] = useState(VENDOR_BOOKINGS); // Use state to simulate filtering

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    // In a real app, this would trigger an API call or filter the state array
    console.log(`Filtering by ${e.target.name}: ${e.target.value}`);
  };

  const getStatusClass = (status) => {
    return `status-${status.toLowerCase().replace(/\s/g, '-')}`;
  };
  
  return (
    <div className="bookings-container">
      <h1>All Bookings & Leads</h1>
      
      {/* Search and Filter Bar */}
      <div className="filter-bar">
        <input 
          type="text" 
          name="search"
          placeholder="Search by client name or ID..."
          onChange={handleFilterChange}
          className="filter-input"
        />
        
        <select name="status" onChange={handleFilterChange} className="filter-select">
          <option value="All">All Statuses</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Pending">Pending</option>
          <option value="New Lead">New Lead</option>
          <option value="Completed">Completed</option>
        </select>
        
        <button className="btn-export">Export to CSV</button>
      </div>
      
      {/* Bookings Table */}
      <div className="bookings-table-wrapper">
        <table className="bookings-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Client Name</th>
              <th>Service</th>
              <th>Event Date</th>
              <th>Value (₹)</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td className="client-info">
                  {booking.clientName}
                  <span className="client-phone">{booking.phone}</span>
                </td>
                <td>{booking.service}</td>
                <td>{booking.eventDate}</td>
                <td>{booking.value.toLocaleString('en-IN')}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(booking.status)}`}>
                    {booking.status}
                  </span>
                </td>
                <td>
                  <button className="btn-view-lead">View Lead</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorBookings;