import './DashboardHome.css';

// --- Mock Data Simulation ---
const KPI_DATA = [
  { label: "Total Leads (Lifetime)", value: "245", trend: "+15% MoM", color: "#FFC107" }, // Gold
  { label: "Confirmed Bookings", value: "32", trend: "+5 MoM", color: "#A52A2A" }, // Crimson
  { label: "Pending Payout", value: "₹ 1,20,000", trend: "0 Open", color: "#6A1B9A" }, // Purple
  { label: "Profile Views", value: "4,500", trend: "+25% MoM", color: "#333333" }, // Dark Text
];

const RECENT_BOOKINGS = [
  { id: 201, client: "Akash Sharma", service: "Venue Booking", date: "Nov 15, 2025", status: "Pending" },
  { id: 202, client: "Priya Singh", service: "Photography Quote", date: "Nov 14, 2025", status: "Confirmed" },
  { id: 203, client: "Rohan Jha", service: "Catering Inquiry", date: "Nov 12, 2025", status: "New Lead" },
];

const LEAD_DATA = [
  { month: "Aug", leads: 15, max: 30 },
  { month: "Sep", leads: 18, max: 30 },
  { month: "Oct", leads: 25, max: 30 },
  { month: "Nov", leads: 30, max: 30 },
];

const DashboardHome = () => {
  return (
    <div className="dashboard-home-container">
      
      {/* 1. KPI Cards Grid */}
      <div className="kpi-grid">
        {KPI_DATA.map((kpi, index) => (
          <div key={index} className="kpi-card">
            <span className="kpi-label">{kpi.label}</span>
            <h2 className="kpi-value" style={{ color: kpi.color }}>{kpi.value}</h2>
            <span className="kpi-trend" style={{ color: kpi.color }}>{kpi.trend}</span>
          </div>
        ))}
      </div>
      
      {/* 2. Leads Overview (Dummy Chart) */}
      <div className="chart-section">
        <h3>Leads & Bookings Overview</h3>
        <div className="chart-placeholder">
          {/* Mock chart area using a simple CSS gradient */}
          <p>Chart data will be rendered here (e.g., Leads per Month)</p>
        </div>
      </div>
      
      {/* 3. Recent Bookings Table */}
      <div className="table-section">
        <h3>Recent Activity</h3>
        <table className="bookings-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Client</th>
              <th>Service</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {RECENT_BOOKINGS.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.client}</td>
                <td>{booking.service}</td>
                <td>{booking.date}</td>
                <td>
                  <span className={`status-badge status-${booking.status.replace(/\s+/g, '').toLowerCase()}`}>
                    {booking.status}
                  </span>
                </td>
                <td><a href="#view" className="action-link">View</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardHome;