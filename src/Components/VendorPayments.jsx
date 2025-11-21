import './VendorPayments.css';

// --- Mock Financial Data ---
const PAYOUT_SUMMARY = {
  totalEarnings: 345000,
  platformCommission: 34500, // 10%
  paidToVendor: 210500,
  pendingPayout: 100000,
};

const PAYOUT_HISTORY = [
  { date: "2025-10-01", amount: 110000, status: "Paid", method: "UPI" },
  { date: "2025-09-05", amount: 100500, status: "Paid", method: "NEFT" },
  { date: "2025-11-20", amount: 75000, status: "Pending", method: "NEFT" },
];

const VendorPayments = () => {
  return (
    <div className="payments-container">
      <h1>Payment Status & Payout Summary</h1>
      
      {/* 1. Financial KPIs */}
      <div className="financial-kpi-grid">
        <div className="finance-card total-earnings">
          <span className="card-label">Total Earnings (Lifetime)</span>
          <h2 className="card-value">₹ {PAYOUT_SUMMARY.totalEarnings.toLocaleString('en-IN')}</h2>
        </div>
        
        <div className="finance-card commission-paid">
          <span className="card-label">Platform Commission (10%)</span>
          <h2 className="card-value commission-value">- ₹ {PAYOUT_SUMMARY.platformCommission.toLocaleString('en-IN')}</h2>
        </div>
        
        <div className="finance-card pending-payout">
          <span className="card-label">Pending Payout</span>
          <h2 className="card-value pending-value">₹ {PAYOUT_SUMMARY.pendingPayout.toLocaleString('en-IN')}</h2>
        </div>
        
        <div className="finance-card paid-vendor">
          <span className="card-label">Net Paid To Vendor</span>
          <h2 className="card-value paid-value">₹ {PAYOUT_SUMMARY.paidToVendor.toLocaleString('en-IN')}</h2>
        </div>
      </div>
      
      {/* 2. Payout History Table */}
      <div className="payout-history-section">
        <h3>Payout History</h3>
        <table className="payout-table">
          <thead>
            <tr>
              <th>Payout Date</th>
              <th>Amount (₹)</th>
              <th>Method</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {PAYOUT_HISTORY.map((payout, index) => (
              <tr key={index}>
                <td>{payout.date}</td>
                <td>{payout.amount.toLocaleString('en-IN')}</td>
                <td>{payout.method}</td>
                <td>
                  <span className={`status-badge status-${payout.status.toLowerCase()}`}>
                    {payout.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* 3. Commission Info */}
      <div className="commission-info">
        <h3>Commission Details</h3>
        <p>Your flat commission rate is <strong>10%</strong> per successful booking. Payouts are processed every 1st and 15th of the month via your registered bank account (NEFT/UPI).</p>
        <button className="btn-update-bank">Update Bank Details</button>
      </div>
      
    </div>
  );
};

export default VendorPayments;