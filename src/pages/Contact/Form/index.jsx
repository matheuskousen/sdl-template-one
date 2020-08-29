import React from "react";
import { Container } from "./style";
export default (props) => {
  return (
    <Container>
      <form action="https://formspree.io/xjvaqydy" method="POST">
        <label>
          <input type="text" name="_replyto" placeholder="E-mail" />
        </label>

        <label>
          <input type="text" name="name" placeholder="Nome" />
        </label>

        <label>
          <input type="text" name="city" placeholder="cidade" />
        </label>

        <label>
          <input type="text" name="contact" placeholder="Telefone" />
        </label>
        <label>
          <textarea name="message" placeholder="Mensagem"></textarea>
        </label>

        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
};
