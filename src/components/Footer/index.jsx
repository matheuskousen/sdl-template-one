import React from "react"
import {Container} from "./style";
import logo from "../../assets/logo.png";


export default  props => {
    

    return <Container>
<section className="content">
    <ul className="row">


        <li className="col col-1">
              <figure className="logo">
                  <img src={logo} alt="soundline logo"/>
              <figcaption>
                  <h3>SoundLine</h3>
              </figcaption>
              </figure>
        </li>



        <li className="col col-2">
             <ol className="andress">
            <li>soundline eventos e festas</li>
            <li>Monte Claros 235, Santos Dumont</li>
            <li>Pará de Minas</li>
            </ol>
        </li>


        <li className="col col-3">
             <ol className="media-social">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Email</li>
            </ol>
        </li>




        <li className="col col-4">
             <ol className="links-menu">
            <li>Inicio</li>
            <li>Services</li>
            <li>Trabalhos</li>
            
            </ol>
        </li>


    </ul>




</section>

<section className="footer-text">
    <p>&copy; 2020 soundline eventos</p>
</section>

    </Container>
}

