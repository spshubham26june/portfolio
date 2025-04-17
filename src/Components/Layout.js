// src/components/Layout.js
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  const backgroundRef = useRef();

  useEffect(() => {
    gsap.to(backgroundRef.current, {
      backgroundPosition: "200% center",
      duration: 10,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage:
          "linear-gradient(270deg, #e66465, #9198e5, #8fd3f4, #84fab0)",
        backgroundSize: "400% 400%",
      }}
    >
      <Header />
      <div className="flex-1 container mx-auto px-4">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
