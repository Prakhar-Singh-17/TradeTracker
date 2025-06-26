import HomePage from "./landing_page/home/HomePage";
import About from "./landing_page/about/About";
import Pricing from "./landing_page/pricing/Pricing";
import Product from "./landing_page/product/Product";
import Dashboard from "./landing_page/dashboard/Dashboard";
import Support from "./landing_page/support/Support";
import Navbar from "./landing_page/common_components/Navbar";
import Footer from "./landing_page/common_components/Footer";
import Login from "./user_auth/Login";
import Signup from "./user_auth/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { useEffect,useState } from "react";
import { Route, Routes ,Navigate} from "react-router-dom";
import { axios } from "./axiosConfig";

function App() {

   const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/check-auth").then((res) => {
      setLoggedIn(res.data.loggedIn);
      setLoading(false);
    }).catch(() => {
      setLoggedIn(false);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Navbar setloggedIn={setLoggedIn} loggedIn={loggedIn}/>
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route
          path="/dashboard/*"
          element={loggedIn ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login setloggedIn={setLoggedIn} />} />
        <Route path="/signup" element={<Signup setloggedIn={setLoggedIn} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
