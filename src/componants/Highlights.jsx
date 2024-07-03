import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { watchImg, rightImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

export default function Highlights() {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="common-padding h-full w-screen overflow-hidden bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 flex w-full items-center justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights
          </h1>
          <div className="flex items-center gap-5">
            <p className="link flex items-center">
              Watch the film
              <img src={watchImg} alt="Watch film" className="ml-2" />
            </p>
            <p className="link flex items-center">
              Watch the event
              <img src={rightImg} alt="Watch event" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
}
