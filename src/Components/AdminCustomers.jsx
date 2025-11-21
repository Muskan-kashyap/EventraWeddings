import { useState } from 'react';
import './AdminCustomers.css';

// --- Mock Customer Data Simulation ---
const REGISTERED_CUSTOMERS = [
  { id: 1, name: "Sita Devi", email: "sita.devi@example.com", phone: "8888xxxxxx", city: "Patna", registered: "2025-10-25", bookings: 3 },
  { id: 2, name: "Rahul Jha", email: "rahul.j@example.com", phone: "9000xxxxxx", city: "Muzaffarpur", registered: "2025-11-01", bookings: 1 },
  { id: 3, name: "Anjali Verma", email: "anjali.v@example.com", phone: "7777xxxxxx", city: "Darbhanga", registered: "2025-11-10", bookings: 0 },
  { id: 4, name: "Vikram Singh", email: "vikram.s@example.com", phone: "9876xxxxxx", city: "Patna", registered: "2025-11-18", bookings: 2 },
];

const AdminCustomers = () => {
  const [customers, setCustomers] = useState(REGISTERED_CUSTOMERS);
  
  // Placeholder for a detailed view action
  const handleViewDetails = (id) => {
    console.log(`Viewing details for Customer ID: ${id}`);
    alert(`Showing Customer ID ${id} Profile (Detail modal/page would open here).`);
  };

  return (
    <div className="admin-customers-container">
      <h1>Registered Customers ({customers.length})</h1>
      <p className="customer-info-count">Total registered users on the BiharWeddings platform.</p>

      <div className="customers-table-wrapper">
        <table className="customers-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Registered</th>
              <th>Bookings</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.city}</td>
                <td>{customer.registered}</td>
                <td><span className={`booking-count-badge count-${customer.bookings > 0 ? 'active' : 'zero'}`}>{customer.bookings}</span></td>
                <td>
                  <button className="btn-view-customer" onClick={() => handleViewDetails(customer.id)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCustomers;