import React, { useRef, useEffect } from "react";

import { Container } from "./style";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default (props) => {
  const col0 = useRef([]);
  const col1 = useRef([]);
  const col2 = useRef([]);
  const col3 = useRef([]);
  const col4 = useRef([]);
  const col5 = useRef([]);
  const col6 = useRef([]);
  const cols = [col0, col1, col2, col3, col4, col5, col6];
  useEffect(() => {
    // eslint-disable-next-line
    cols.map((element, i) => {
      ScrollTrigger.matchMedia({
        "(min-width:800px)": () => {
          // textEffect
          const txtImage = gsap.timeline({
            scrollTrigger: {
              trigger: element.current,
              scrub: true,
              start: "top center",
              end: "-100%",
            },
          });

          txtImage.fromTo(
            element.current,
            {
              opacity: 0,
              duration: 2,
              delay: 1,
              y: 10,
              transition: "all 1s ease 0s",
              ease: "bounce",
            },
            {
              opacity: 1,
              y: 0,
              duration: 3,
              width: "100%",
              delay: 2,

              transition: "all 3s ease 0s",

              ease: "bounce",
            }
          );
        },

        "(max-width:799px)": () => {
          // textEffect
          const txtImage = gsap.timeline({
            scrollTrigger: {
              trigger: element.current,
              scrub: true,
              start: "top center",
              end: "-100%",
            },
          });

          txtImage.fromTo(
            element.current,
            {
              opacity: 0,
              duration: 2,
              y: 15,
              delay: 1,

              transition: "1s",
              ease: "bounce",
            },
            {
              opacity: 1,
              duration: 3,
              delay: 3,
              y: 0,
              transition: "3s",

              ease: "bounce",
            }
          );
        },
      });
    });
  }, [cols]);

  return (
    <Container>
      <article className="row">
        <header className="title" ref={col0}>
          <h1>Services</h1>
        </header>
        <section className="Infos">
          <div className="col-image" ref={col1}>
            <img src="https://i.ibb.co/TH16vTQ/002.jpg" alt="projeto" />
          </div>
          <div className="col-text" ref={col2}>
            <h2>Projetos</h2>
            <p>
              Design é o processo pelo qual uma idéia se transforma em um
              produto. Gostamos de projetar usando a tendência para prototipar
              cedo e iterar rapidamente. Combinando tendências e ferramentas de
              som, iluminações e outros, podemos testar idéias e criar um design
              interativos desde o início.
            </p>

            <p>
              Nossa abordagem combina estética bonita, interações deliciosas e
              foco na acessibilidade para fornecer produtos de qualidade.
              Falamos o mesmo idioma dos nossos clientes para garantir uma
              colaboração tranquila.
            </p>
          </div>
        </section>

        {/* info2 */}

        <section className="Infos" style={{ marginTop: "10rem" }}>
          <div className="col-image" style={{ order: 1 }} ref={col3}>
            <img src="https://i.ibb.co/cD50B7p/020.jpg" alt="projeto" />
          </div>
          <div className="col-text" ref={col4}>
            <h2>Engenharia</h2>
            <p>
              A engenharia robusta é a base de qualquer ótimo produto.
              Trabalhamos com o ecossistema grande, como estuturas de alumino,
              globos, pista de led para deixa o entreterimento de seus
              convidados e seu ainda mais elegante.
            </p>

            <p>
              Nossas habilidades interdisciplinares nos permitem preencher a
              lacuna entre design e equipamentos e levar seu evento da ideia ao
              Produto Mínimo Viavel (MVP) e além o mais rápido possível.
            </p>
          </div>
        </section>

        {/* col 3 */}

        <section className="Infos" style={{ marginTop: "10rem" }}>
          <div className="col-image" ref={col5}>
            <img src="https://i.ibb.co/Twst6Wp/015.jpg" alt="projeto" />
          </div>
          <div className="col-text" ref={col6}>
            <h2>Visualização de dados</h2>
            <p>
              Um dos principais objetivos da visualização de dados é comunicar
              informações de maneira eficaz. Criamos visualizações interativas
              personalizadas para contar informações complexas de maneira
              atraente e intuitiva. Juntos, podemos identificar oportunidades
              únicas, dependendo da natureza dos seus dados, e escolher uma
              abordagem personalizada que melhor se adapte às suas metas de
              evento.
            </p>
          </div>
        </section>
      </article>
    </Container>
  );
};
