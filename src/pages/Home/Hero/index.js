import React, { useRef, useEffect } from "react";
import { Container } from "./style";
import { TweenMax } from "gsap/dist/gsap";

import Seo from "../../../assets/seo.jpg";
export default function Hero(props) {
  const onloadEffect = useRef(null);
  const classContainer = useRef(null);
  console.log(".banner-wrapper-row");
  useEffect(() => {
    let roleStyle = "role";
    classContainer.current.classList.add(`${roleStyle}`);
    console.log(classContainer.current);

    TweenMax.from(onloadEffect.current, 1, {
      duration: 1,
      text: "",
      scrub: 1,
      opacity: 0,
      y: 200,
    });
  });

  return (
    <Container ref={classContainer}>
      <section className="banner-wrapper-row">
        <div className="left">
          <h1 ref={onloadEffect}>
            • Locação de som, luz em geral para seu evento • Casamentos, • 15
            anos, bodas, Confraternizações com os melhores DJs da região
          </h1>
        </div>
        <div className="line"></div>
        <div className="right">
          <div className="card">
            <img src={Seo} alt="Vinicius Carmagos seo da empressa Sound Line" />
            <div className="card-body ">
              <h2>Vinicius Camargos </h2>
              <p>Chefe Executivo Oficial de Sound line</p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
