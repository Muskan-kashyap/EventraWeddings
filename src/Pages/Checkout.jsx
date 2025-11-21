import { useState } from "react";
import "./Checkout.css";
import { VENDORS } from "../Services/mockData"; // Import mock data for summary

const MOCK_VENDOR_ID = 1;
const BOOKING_SUMMARY = VENDORS.find((v) => v.id === MOCK_VENDOR_ID);

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    console.log("Final Booking Data:", {
      vendor: BOOKING_SUMMARY.name,
      ...formData,
    });

    alert(
      `Booking Confirmed! (Data logged to console). Vendor: ${BOOKING_SUMMARY.name}`
    );
  };

  return (
    <div className="checkout-page-container">
      <h1 className="checkout-title">Confirm Your Booking</h1>

      <div className="checkout-content-grid">
        {/* LEFT COLUMN: Customer & Booking Form */}
        <main className="checkout-form-area">
          <form id="checkout-form" onSubmit={handlePayment}>
            <section className="booking-details">
              <h2>1. Booking Details</h2>
              <div className="input-group">
                <label htmlFor="date">Event Date*</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="guests">Estimated Guests*</label>
                <input
                  type="number"
                  name="guests"
                  id="guests"
                  placeholder="Min. 50"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                />
              </div>
            </section>

            <section className="contact-details">
              <h2>2. Your Contact Information</h2>
              <div className="input-group">
                <label htmlFor="fullName">Full Name*</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Rahul Kumar"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Phone Number*</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="rahul.k@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </section>
          </form>
        </main>

        {/* RIGHT COLUMN: Order Summary & Payment */}
        <aside className="checkout-summary-area">
          <div className="summary-box">
            <h3>Booking Summary</h3>
            <p className="summary-vendor-name">
              {BOOKING_SUMMARY.name} ({BOOKING_SUMMARY.category})
            </p>

            <div className="summary-breakdown">
              <div className="breakdown-item">
                <span>Base Package (Mock)</span>
                <span>{BOOKING_SUMMARY.price}</span>
              </div>
              <div className="breakdown-item">
                <span>GST/Taxes (18%)</span>
                <span>₹27,000</span>
              </div>
              <div className="breakdown-item total">
                <span>Total Payable (Deposit)</span>
                <span className="total-price">₹1,77,000</span>
              </div>
            </div>

            <button
              type="submit"
              className="btn-payment-dummy"
              form="checkout-form"
            >
              Proceed to Dummy Payment 🔒
            </button>
            <p className="payment-note">
              Securely powered by **BiharWeddings**
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Checkout;
