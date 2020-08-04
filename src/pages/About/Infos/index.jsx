import React from 'react';
import { Article } from './style';

import idea from "../../../assets/icon/idea.svg"
import data from "../../../assets/icon/data.svg"
import way from "../../../assets/icon/way.svg"
import why from "../../../assets/why.png"


export default props => {
    return <Article>
    <section className="row">
    <div className="col col-left">
       <div className="col-post-content">
           <h2>Soundline</h2>
           <p>A Soundline proporciona a tranquilidade que você precisa na realização do seu evento, tendo como principal característica, a experiência, pontualidade e compromisso para com o mesmo.

Com profissionais que já atuam há mais de 10 anos no mercado de entretenimento, com experiência em  festas e eventos em geral, podemos lhe oferecer novidades, ideias e a melhor logística para sucesso do seu evento.</p>
       </div>
    </div>
    <div className="col col-right">
        <picture>
            <img src="https://i.ibb.co/k2kZSYj/casamentos.jpg" alt="img about what we do"/>
        </picture>
    </div>
    </section>

      <section className="why">
             <div className="row__why">
                <header className="why__headline">
                    <img src={why} alt="freepink"/>
                    <h3>PORQUE NOS ESCOLHER ?</h3>

                    <p>Reunimos as pessoas certas para desafiar o pensamento estabelecido e impulsionar a transformação</p>
                </header>


                <ul className="groud-cards">
                      
                     <li className="card">
                         <img src={idea} alt="inovações, icon get  by Freepik"/>
                         <div className="card-body">
                             <h4>Inovações</h4>
                             <p>Inovamos sistematicamente,continuamente e com sucesso.</p>
                         </div>
                     </li>


 <li className="card">
                         <img src={data} alt="inovações, icon get  by Freepik"/>
                         <div className="card-body">
                             <h4>Desempenho</h4>
                             <p>O desempenho é sobre como resolver problemas e construir negócios.</p>
                         </div>
                     </li>

                     <li className="card">
                         <img src={way} alt="inovações, icon get  by Freepik"/>
                         <div className="card-body">
                             <h4>Solução</h4>
                             <p>Somos um fornecedor de soluções de negócios com serviços completos.</p>
                         </div>
                     </li>

                </ul>
             </div>
      </section>

    </Article>
}
