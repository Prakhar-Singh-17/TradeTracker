import HomePage from "./landing_page/home/HomePage";
import About from "./landing_page/about/About";
import Pricing from "./landing_page/pricing/Pricing";
import Product from "./landing_page/product/Product";
import Signup from "./landing_page/signup/Signup";
import Support from "./landing_page/support/Support";
import Navbar from "./landing_page/common_components/Navbar";
import Footer from "./landing_page/common_components/Footer";
import "./index.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
