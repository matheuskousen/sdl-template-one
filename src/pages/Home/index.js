import React, { useRef, useEffect } from "react";
import Nav from "../../components/Nav";
import Hero from "./Hero";
import Services from "./Services";
import Footer from "../../components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const heffect = useRef(null);
  useEffect(() => {
    let c1 = gsap.timeline({
      scrollTrigger: {
        trigger: heffect.current,
        scrub: 0.2,
        start: "top top",
        end: "100%",
      },
    });
    c1.fromTo(
      heffect.current,

      { opacity: 1, y: 0, autoAlpha: 1 },
      { opacity: 0, y: -100, autoAlpha: 0, duration: 1 }
    );
  }, []);

  return (
    <>
      <Nav />
      <Hero get={heffect} />
      <Services />

      <Footer />
    </>
  );
}
