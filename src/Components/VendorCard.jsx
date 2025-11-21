import "./VendorCard.css";
import { Link } from "react-router-dom";

const VendorCard = ({ data }) => {
  return (
    <Link to={`/vendors/${data.id}`} className="vendor-card-link-wrapper">
      <div className="vendor-card">
        {/* Image Section */}
        <div className="card-image-container">
          <img src={data.image} alt={data.name} className="card-image" />
          {data.verified && <span className="badge-verified">Verified</span>}
          <button className="btn-heart">❤</button>
        </div>

        {/* Details Section */}
        <div className="card-details">
          <div className="card-header">
            <h3 className="vendor-name">{data.name}</h3>
            <div className="rating-box">
              <span className="star">★</span> {data.rating}
              <span className="review-count">({data.reviews})</span>
            </div>
          </div>

          <p className="vendor-location">📍 {data.location}</p>
          <p className="vendor-category">{data.category}</p>

          <div className="card-footer">
            <div className="price-info">
              <span className="label">Starting at</span>
              <span className="price">{data.price}</span>
            </div>
            <button className="btn-inquiry">Send Inquiry</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VendorCard;
