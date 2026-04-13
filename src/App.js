import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import FooterBottom from "./components/footer/FooterBottom";

function App() {
  return (
    // Global wrapper - remove the 'bg-white' to let sections define their own background
    <div className="w-full h-auto text-midnightBlue selection:bg-midnightBlue selection:text-white">
      <Navbar />

      {/* 1. Home/Banner Section (Midnight Blue Background) */}
      <div className="w-full bg-[#191970] text-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <Banner />
        </div>
      </div>

      {/* 2. Features Section (Light Background) */}
      <div className="w-full bg-[#fcfcfc]">
        <div className="max-w-screen-xl mx-auto px-4">
          <Features />
        </div>
      </div>

      {/* 3. Resume Section (White Background) */}
      <div className="w-full bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <Resume />
        </div>
      </div>

      {/* 4. Contact Section (Midnight Blue Background) */}
      <div className="w-full bg-[#191970] text-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <Contact />
        </div>
      </div>

      {/* Footer (Light Background) */}
      <div className="w-full bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <FooterBottom />
        </div>
      </div>
    </div>
  );
}

export default App;