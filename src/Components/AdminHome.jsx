import React from 'react';
import './AdminHome.css';

const ADMIN_KPI_DATA = [
  { label: "Total Vendors", value: "320", color: "#6A1B9A", trend: "15 Pending" },
  { label: "Total Customers", value: "5,800", color: "#A52A2A", trend: "+300 MoM" },
  { label: "Confirmed Bookings", value: "240", color: "#FFC107", trend: "₹ 50L GMV" },
];

const AdminHome = () => {
  return (
    <div className="admin-home-container">
      
      {/* KPI Cards Grid */}
      <div className="admin-kpi-grid">
        {ADMIN_KPI_DATA.map((kpi, index) => (
          <div key={index} className="admin-kpi-card">
            <span className="card-label">{kpi.label}</span>
            <h2 className="card-value" style={{ color: kpi.color }}>{kpi.value}</h2>
            <span className="card-trend">{kpi.trend}</span>
          </div>
        ))}
      </div>
      
      {/* Chart Section (Combined Summary) */}
      <div className="summary-chart-section">
        <h3>Platform Activity Overview (Last 6 Months)</h3>
        <div className="chart-placeholder-admin">
          
          <p>Chart: Bookings vs. Vendor Count over time</p>
        </div>
      </div>
      
    </div>
  );
};

export default AdminHome;