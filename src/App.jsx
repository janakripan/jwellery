import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <main className="overflow-x-hidden relative ">
        <NavBar />

        <div id="details">
          <Outlet />
        </div>

        <Footer />
      </main>
    </>
  );
}

export default App;
