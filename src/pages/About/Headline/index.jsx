import React, { useRef, useEffect } from "react";
import { Header } from "./style";
import { TweenMax } from "gsap";

export default (props) => {
  const Headlinetitle = useRef(null);
  useEffect(() => {
    TweenMax.from(Headlinetitle.current, 1, {
      duration: 2,
      opacity: 0,

      x: -30,

      ease: "bounce",
    });
    TweenMax.to(Headlinetitle.current, 2, {
      duration: 3,
      opacity: 1,

      x: 0,
      ease: "bounce",
    });
  }, []);

  return (
    <Header ref={Headlinetitle}>
      <section className="row">
        <h1>Sobre Nós</h1>
        <p>
          Conheça melhor sobre o que fazemos pra garatir que voce tenha um
          produto entregue com uma auta qualidade.
        </p>
      </section>
    </Header>
  );
};
