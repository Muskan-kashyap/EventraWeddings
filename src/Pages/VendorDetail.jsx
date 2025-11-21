import { useParams, Link, useNavigate } from "react-router-dom";
import { getVendorById } from "../Services/mockData";
import "./VendorDetail.css";

const VendorDetail = () => {
  const { vendorId } = useParams();
  const navigate = useNavigate();
  const vendor = getVendorById(vendorId);

  const handleInquiry = (e) => {
    e.preventDefault();
    console.log(
      `Inquiry submitted for ${vendor.name}. Proceeding to Checkout.`
    );

    navigate("/checkout");
  };

  if (!vendor) {
    return (
      <div className="vdp-not-found">
        <h2>Vendor Not Found</h2>
        <p>
          The service listing you are looking for does not exist.{" "}
          <Link to="/vendors">Go back to listings</Link>
        </p>
      </div>
    );
  }

  // --- Main Render ---
  return (
    <div className="vdp-container">
      {/* Photo Gallery Section (Top) */}
      <div className="gallery-section">
        <div className="main-photo-wrapper">
          <img
            src={vendor.gallery[0]}
            alt={`${vendor.name} main`}
            className="main-photo"
          />
        </div>
        <div className="thumbnail-grid">
          {vendor.gallery.slice(1).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail-photo"
            />
          ))}
        </div>
      </div>

      {/* Content Layout (Main body + Sticky Widget) */}
      <div className="vdp-content-layout">
        {/* LEFT COLUMN: Main Vendor Details */}
        <main className="vdp-main-content">
          <div className="vdp-header">
            <h1>{vendor.name}</h1>
            <div className="vdp-rating">
              <span className="star-icon">★</span> {vendor.rating} (
              {vendor.reviews} reviews)
            </div>
            <p className="vdp-location">
              📍 {vendor.location} | {vendor.category}
            </p>
          </div>

          <hr />

          {/* About Section */}
          <section className="about-section">
            <h2>About {vendor.name}</h2>
            <p>{vendor.description}</p>
          </section>

          {/* Service Features Section */}
          <section className="features-section">
            <h2>Key Features</h2>
            <div className="feature-grid">
              <div>
                Capacity:{" "}
                <span className="feature-value">
                  {vendor.minCapacity}-{vendor.maxCapacity} Guests
                </span>
              </div>
              {vendor.services.map((service, index) => (
                <div key={index}>✅ {service}</div>
              ))}
            </div>
          </section>

          <hr />

          {/* Reviews Section Placeholder */}
          <section className="reviews-section">
            <h2>Customer Reviews ({vendor.reviews})</h2>
            <p>
              Customer reviews will be dynamically loaded here. For now, trust
              the high rating!
            </p>
          </section>
        </main>

        {/* RIGHT COLUMN: Sticky Inquiry Widget */}
        <aside className="inquiry-widget">
          <h3>Request a Quote</h3>
          {/* ... (price info) ... */}
          <form className="inquiry-form" onSubmit={handleInquiry}>
            {" "}
            {/* Use the new handler */}
            <input
              type="date"
              className="form-input"
              placeholder="Preferred Date"
              required
            />
            <input
              type="number"
              className="form-input"
              placeholder="Number of Guests"
              min="50"
              required
            />
            <textarea
              className="form-input"
              placeholder="Your Message (Optional)"
            ></textarea>
            <button type="submit" className="btn-primary-inquiry">
              {" "}
              {/* Renamed button class */}
              Check Availability & Get Best Price
            </button>
            <p className="contact-info">📞 Call Vendor: 9876-XXXXXX</p>
          </form>
        </aside>
      </div>
    </div>
  );
};

export default VendorDetail;
