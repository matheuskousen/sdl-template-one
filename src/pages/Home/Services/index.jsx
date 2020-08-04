import React, { useRef, useEffect } from "react";

import { Container } from "./style"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default   props => {

    


     const serviceEffect = useRef([])  
   useEffect(() => {
       console.log(serviceEffect)
       let info1 = gsap.timeline({
        scrollTrigger: {
          trigger: serviceEffect.current,
          scrub: 0.2,
          start: "top center+=100",
          end: "20%",
        },
      });
      info1.fromTo(
        serviceEffect.current,
        { opacity: 0, y: -100, duration: 2  },
        { opacity: 1, y: 0, duration: 2 }
      );
      
   },[])
   
    return  (
        <Container  >
            <article className="row" ref={serviceEffect}   >
                <header className="title" >
                    <h1>Services</h1>
                </header>
                <section className="Infos" >
                 <div className="col-image" >
                     <img src="https://i.ibb.co/TH16vTQ/002.jpg" alt="projeto"/>
                 </div>
                 <div className="col-text" >
                     <h2>Projetos</h2>
                     <p>Design é o processo pelo qual uma idéia
                          se transforma em um produto. Gostamos de 
                          projetar usando a tendência  para prototipar cedo
                           e iterar rapidamente. Combinando tendências e ferramentas 
                           de som, iluminações e outros, podemos testar idéias e criar um design
                            interativos desde o início.
                       </p>

                       <p>
                       Nossa abordagem combina estética bonita, interações deliciosas e foco na acessibilidade para fornecer produtos de qualidade. Falamos o mesmo idioma dos nossos clientes para garantir uma colaboração tranquila.
                       </p>
                 </div>
                </section>



                {/* info2 */}

                <section className="Infos" style={{marginTop:"10rem"}}  >
                 <div className="col-image" style={{order:1  }} >
                     <img src="https://i.ibb.co/cD50B7p/020.jpg" alt="projeto"/>
                 </div>
                 <div className="col-text" >
                     <h2>Engenharia</h2>
                     <p>
                     A engenharia robusta é a base de qualquer ótimo produto. Trabalhamos com o ecossistema grande, como  estuturas de alumino, globos, pista de led  para  deixa o entreterimento de seus convidados e seu ainda mais elegante.
                       </p>

                       <p>
                       Nossas habilidades interdisciplinares nos permitem preencher a lacuna entre design e equipamentos e levar seu evento da ideia ao Produto Mínimo Viavel (MVP) e além o mais rápido possível.
                       </p>
                 </div>
                </section>

    {/* col 3 */}


    <section className="Infos" style={{marginTop:"10rem"}}  >
                 <div className="col-image" >
                     <img src="https://i.ibb.co/TH16vTQ/002.jpg" alt="projeto"/>
                 </div>
                 <div className="col-text" >
                     <h2>Visualização de dados</h2>
                     <p>Um dos principais objetivos da visualização de dados é comunicar informações de maneira eficaz. Criamos visualizações interativas personalizadas para contar informações complexas de maneira atraente e intuitiva. Juntos, podemos identificar oportunidades únicas, dependendo da natureza dos seus dados, e escolher uma abordagem personalizada que melhor se adapte às suas metas de evento.
                       </p>

                       
                 </div>
                </section>


            </article>



       





            
        </Container>
    )
}