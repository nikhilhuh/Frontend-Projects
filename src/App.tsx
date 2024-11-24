import { Routes, Route, useLocation, useNavigate, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Agency from "./components/Agency";
import RealEstate from "./components/RealEstate";
import BlogSimple from "./components/BlogSimple";
import Blog from "./components/Blog";
import ECommerce from "./components/ECommerce";
import NewsMagazine from "./components/NewsMagazine";
import Portfolio from "./components/Portfolio";
import ProductPage from "./components/ProductPage";
import { FaArrowLeft } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import 'foundation-sites/dist/css/foundation.min.css';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const handlegoback = () => {
    navigate(-1);
  }
  return (
    <div className="min-h-screen">
      {/* Render Navbar only for '/' and '/home' routes */}
      {location.pathname === "/" || location.pathname === "/home" ? (
        <Navbar />
      ) : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/blog-simple" element={<BlogSimple />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/e-commerce" element={<ECommerce />} />
        <Route path="/news-magazine" element={<NewsMagazine />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/product-page" element={<ProductPage />} />
      </Routes>

      {/* Render Navbar only for '/' and '/home' routes */}
      {location.pathname === "/" || location.pathname === "/home" ? null : (
        <div className="flex gap-4 w-full justify-center">
          <button className="cursor-pointer flex items-center gap-2 font-semibold dark:text-white text-black px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 hover:text-black transition-all ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" onClick={handlegoback}>
            <FaArrowLeft className="text-lg" /> Back
          </button>
          <Link to="/home" className="cursor-pointer flex items-center gap-2 font-semibold dark:text-white text-black px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 hover:text-black transition-all ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4">
            <MdHome className="text-lg" /> Home
          </Link>
        </div>
      )}
    </div>
  );
}

export default App;
