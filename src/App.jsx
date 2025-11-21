import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"; // The Landing Page
import VendorList from "./Pages/VendorList"; // The Listing Page
import VendorDetail from "./Pages/VendorDetail";
import Checkout from "./Pages/Checkout";
import Auth from "./Pages/Auth";
import Profile from "./Pages/Profile";
import VendorDashboard from "./Pages/VendorDashboard";
import AdminDashboard from "./Pages/AdminDashboard";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Navbar remains outside the Routes so it appears on every page */}
        <Navbar />

        {/* Routes define which component to render for a specific path */}
        <div style={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vendors" element={<VendorList />} />
            <Route path="/vendors/:vendorId" element={<VendorDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />{" "}
            <Route path="/vendor/dashboard" element={<VendorDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route
              path="/admin/login"
              element={<h2>Admin Login Placeholder</h2>}
            />
            <Route path="/vendor-register" element={<Auth isVendor={true} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
