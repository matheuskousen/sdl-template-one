import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import Form from "./Form";

import { Section } from "./style";
import logo from "../../assets/logo.png";
export default (props) => {
  return (
    <>
      <Nav />

      <Main>
        <Section>
          <div class="headline-contact">
            <h2>Contato</h2>
            <p>
              Envie uma mensagem para nós e saiba mais sobre nossos trabalho,
              como contratar nossos serviço e fique por dentro de todas
              novidades.
            </p>

            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>

          <Form />
        </Section>
      </Main>

      <Footer />
    </>
  );
};
