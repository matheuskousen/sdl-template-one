import React from "react";
import { Container } from "./style";
import logo from "../../assets/logo.png";

export default (props) => {
  return (
    <Container>
      <section className="content">
        <ul className="row">
          <li className="col col-1">
            <figure className="logo">
              <img src={logo} alt="soundline logo" />
              <figcaption>
                <h3>SoundLine</h3>
              </figcaption>
            </figure>
          </li>

          <li className="col col-2">
            <ol className="andress">
              <li>Sound Line | Som e iluminação</li>
              <li>Monte Claros 235, Santos Dumont</li>
              <li>Pará de Minas</li>
            </ol>
          </li>

          <li className="col col-3">
            <ol className="media-social">
              <li>
                <a
                  href="https://www.instagram.com/sound_line_eventos/"
                  // eslint-disable-next-line
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="bit.ly/WhatsappSoundLine2" target="_blank">
                  What's app
                </a>
              </li>
              <li>
                <a href="facebook.com/soundlinesomeluz" target="_blank">
                  Facebook
                </a>
              </li>
            </ol>
          </li>

          <li className="col col-4">
            <ol className="links-menu">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/sobre">Sobre</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/contato">Contato</a>
              </li>
            </ol>
          </li>
        </ul>
      </section>

      <section className="footer-text">
        <p>&copy; 2020 Sound Line | Som e iluminação</p>
      </section>
    </Container>
  );
};
