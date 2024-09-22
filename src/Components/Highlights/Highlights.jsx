import React from "react";
import "./Highlights.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Highlights() {
  useGSAP(() => {
    gsap.to(".highlights-header", { y: "0px", opacity: 1, delay: 1 });
    gsap.to(".highlights-links", {
      y: "0px",
      opacity: 1,
      delay: 1,
      stagger: 0.25,
    });
  });

  return (
    <section className="highlights">
      <div className="top-container">
        <h1 className="highlights-header">Get the highlights</h1>

        <div className="highlights-btns-container">
          <a href="" className="highlights-links">
            Watch the film <ion-icon name="play-circle-outline"></ion-icon>
          </a>
          <a href="" className="highlights-links">
            Watch the event
          </a>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
