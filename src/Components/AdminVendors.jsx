import './AdminVendor.css';

const PENDING_VENDORS = [
  { id: 10, name: "New Heights Catering", category: "Catering", location: "Patna", joined: "2025-11-18" },
  { id: 11, name: "Luxmi Mandap Decor", category: "Decorators", location: "Gaya", joined: "2025-11-17" },
  { id: 12, name: "Raja Band Baaja", category: "Band", location: "Muzaffarpur", joined: "2025-11-15" },
];

const AdminVendors = () => {
  const handleApproval = (id, status) => {
    // Backend-Ready: This function would send an API request to update the vendor's status.
    console.log(`Vendor ${id}: Status changed to ${status}`);
    alert(`${status} successful for Vendor ID ${id}`);
    // In a real app: Refetch the list to remove the processed vendor.
  };

  return (
    <div className="admin-vendors-container">
      <h1>Vendor Approval Queue ({PENDING_VENDORS.length})</h1>
      <p className="vendor-count-info">Review these vendors before publishing their listings.</p>

      <div className="pending-vendors-list">
        <table className="vendors-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Vendor Name</th>
              <th>Category</th>
              <th>Location</th>
              <th>Joined Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {PENDING_VENDORS.map((vendor) => (
              <tr key={vendor.id}>
                <td>{vendor.id}</td>
                <td>{vendor.name}</td>
                <td>{vendor.category}</td>
                <td>{vendor.location}</td>
                <td>{vendor.joined}</td>
                <td className="action-buttons">
                  <button 
                    className="btn-approve" 
                    onClick={() => handleApproval(vendor.id, 'Approved')}>
                    Approve
                  </button>
                  <button 
                    className="btn-reject" 
                    onClick={() => handleApproval(vendor.id, 'Rejected')}>
                    Reject
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

export default AdminVendors;