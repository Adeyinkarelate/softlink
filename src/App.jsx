import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Connect from "./pages/Connect";
import ScrollToTop from "./components/ScrollToTop";

import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
