import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import HomeNavbar from "./components/HomeNavbar";
import HomeSection from "./components/HomeSection";
import Tropical from "./components/Tropical";
import Destination from "./components/Destination";
import DiscountSection from "./components/DiscountSection";
import BookSection from "./components/BookSection";
import Testimonals from "./components/Testimonals";
import Footer from "./components/Footer";
import "./index.css";
const App = () => {
  return (
    <div>
      <HomeNavbar />

      <HomeSection />
      <Tropical />
      <Destination />
      <DiscountSection />
      <BookSection />
      <Testimonals />
      <Footer />
    </div>
  );
};

export default App;
