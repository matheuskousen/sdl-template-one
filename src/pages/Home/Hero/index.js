import React, { useRef, useEffect } from "react";
import { Container } from "./style";
import { TweenMax } from "gsap/dist/gsap";

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
            A <span className="soundline">Sound Line</span> e uma empresa
            criativa que trabalha no entretenimento atravez, da iluminações,
            som, estruturas e muito mais.
          </h1>
        </div>
        <div className="line"></div>
        <div className="right">
          <div className="card">
            <img
              src="https://scontent-gig2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/70377846_136421314280088_6511871281625562442_n.jpg?_nc_ht=scontent-gig2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=wkyOxLsFsZ8AX8q3TRp&oh=6b322711456a5bc6dce1f2042c0854b3&oe=5F4B758B"
              alt="hero imgs "
            />
            <div className="card-body ">
              <h2>Vinicius Camargos </h2>
              <p>Chefe Executivo Oficial de Soundline</p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
