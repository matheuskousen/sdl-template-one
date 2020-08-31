import React from "react";
import { Header, Row, Title } from "./style";

export default (props) => {
  return (
    <Header role="banner">
      <Row>
        <Title isvaluescroll={props.isvaluescroll}>Trabalhos</Title>
        <p>
          Veja um pouco sobre nossa dedicação de entrega um otimo produto pra
          nossos clientes
        </p>
      </Row>
    </Header>
  );
};
