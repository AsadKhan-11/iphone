import React from "react";
import "./Home.css";
import iphone from "./Videos/iPhone.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Home() {
  useGSAP(() => {
    gsap.to("#cta", { y: "-50px", opacity: 1, delay: 3 });
  });

  return (
    <div className="home">
      <h1 className="home-header">iPhone 16 pro</h1>
      <video autoPlay muted style={{ width: "100%", height: "550px" }}>
        <source src={iphone} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="cta" id="cta">
        <button className="cta-btn">Buy now</button>
        <p className="cta-price">From $199/month or $999</p>
      </div>
    </div>
  );
}

export default Home;
