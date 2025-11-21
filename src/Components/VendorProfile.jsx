import React, { useState } from 'react';
import './VendorProfile.css';

// --- Initial Mock Data Structure ---
const INITIAL_PROFILE_STATE = {
  name: "Mithila Moments Photography",
  category: "Photography",
  description: "Capturing the emotion and vibrancy of Bihari weddings...",
  location: "Kankarbagh, Patna",
  minPrice: 40000,
  gallery: [
    { url: "https://images.unsplash.com/photo-1520854221256-17451cc330e7", id: 1 },
    { url: "https://images.unsplash.com/photo-1549556846-976ff16d3f25", id: 2 },
  ],
  services: [
    { name: "Candid Photography", price: 40000 },
    { name: "Traditional Video", price: 30000 },
  ],
};

const VendorProfile = () => {
  const [profileData, setProfileData] = useState(INITIAL_PROFILE_STATE);
  const [newService, setNewService] = useState({ name: '', price: '' });

  const handleInputChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleAddService = (e) => {
    e.preventDefault();
    if (newService.name && newService.price) {
      setProfileData({
        ...profileData,
        services: [...profileData.services, newService]
      });
      setNewService({ name: '', price: '' });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Backend-Ready: This is where Axios/Fetch would send a PUT request 
    console.log("Saving Vendor Profile Data:", profileData);
    alert("Profile saved successfully! (Data logged to console)");
  };

  return (
    <div className="vendor-profile-container">
      <form onSubmit={handleSave}>
        
        {/* SECTION 1: General Information */}
        <div className="profile-section">
          <h2>1. Basic Information</h2>
          <div className="form-grid">
            <div className="input-group">
              <label>Vendor Name</label>
              <input type="text" name="name" value={profileData.name} onChange={handleInputChange} required />
            </div>
            <div className="input-group">
              <label>Location (City)</label>
              <input type="text" name="location" value={profileData.location} onChange={handleInputChange} required />
            </div>
            <div className="input-group full-width">
              <label>Description</label>
              <textarea name="description" value={profileData.description} onChange={handleInputChange} rows="4" />
            </div>
          </div>
        </div>

        {/* SECTION 2: Services and Pricing */}
        <div className="profile-section">
          <h2>2. Services & Pricing</h2>
          
          <div className="pricing-list">
            <div className="pricing-header">
              <span>Service Name</span>
              <span>Price (₹)</span>
              <span>Action</span>
            </div>
            {profileData.services.map((service, index) => (
              <div key={index} className="pricing-item">
                <span>{service.name}</span>
                <span>{service.price}</span>
                <button type="button" className="btn-remove">Remove</button>
              </div>
            ))}
          </div>

          <div className="add-service-form">
            <input 
              type="text" 
              placeholder="New Service Name (e.g., Drone Coverage)"
              value={newService.name} 
              onChange={(e) => setNewService({...newService, name: e.target.value})}
            />
            <input 
              type="number" 
              placeholder="Price (e.g., 15000)"
              value={newService.price} 
              onChange={(e) => setNewService({...newService, price: parseInt(e.target.value)})}
            />
            <button type="button" onClick={handleAddService} className="btn-add">
              + Add Service
            </button>
          </div>
        </div>
        
        {/* SECTION 3: Photo Gallery */}
        <div className="profile-section">
          <h2>3. Photo Gallery</h2>
          <div className="gallery-preview">
            {profileData.gallery.map((img, index) => (
              <div key={index} className="gallery-thumb">
                <img src={`${img.url}?auto=format&fit=crop&w=100&h=100`} alt={`Gallery ${index}`} />
                <button type="button" className="btn-delete">x</button>
              </div>
            ))}
            <div className="gallery-upload-placeholder">
              <input type="file" multiple id="file-upload" />
              <label htmlFor="file-upload" className="btn-upload">Click to Upload Photos</label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn-save-profile">Save All Changes</button>
      </form>
    </div>
  );
};

export default VendorProfile;