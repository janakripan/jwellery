import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <main className="overflow-x-hidden relative pt-44 ">
        <NavBar />

        <div id="details">
          <Outlet />
        </div>

        <Footer />
      </main>
      <ScrollToTop/>
    </>
  );
}

export default App;
