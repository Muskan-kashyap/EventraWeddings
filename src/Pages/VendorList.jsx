import VendorCard from '../Components/VendorCard';
import FilterSidebar from '../Components/FilterSidebar'; // New Import
import { VENDORS } from '../Services/mockData';
import './VendorList.css'; // New CSS Import

const VendorList = () => {
  
  // Dummy function for handling filters (Backend-ready)
  const handleFilterChange = (filters) => {
    console.log("Filters to send to API:", filters);
    // In a real app: fetchVendors(filters) would be called here
  };

  return (
    <div className="listing-page-container">
      <h2 className="listing-heading">150+ Top Rated Vendors in Bihar</h2>
      
      <div className="listing-content">
        
        {/* LEFT COLUMN: Filter Sidebar */}
        <FilterSidebar onFilterChange={handleFilterChange} />
        
        {/* RIGHT COLUMN: Vendor Cards */}
        <main className="vendor-grid">
          {VENDORS.map((vendor) => (
            <VendorCard key={vendor.id} data={vendor} />
          ))}
        </main>

      </div>
    </div>
  );
};

export default VendorList;