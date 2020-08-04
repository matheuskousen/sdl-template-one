import React from "react"
import {Container } from "./style"
export default props => {


    return <Container>
             <h1>Faça seu orçamento </h1>
        <form>
            <input type="text" placeholder="Nome"/>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Telefone" />
            <input type="text" placeholder="Cidade" />
            <textarea placeholder="Deixe uma mensagem"></textarea>
            
            <button>Enviar</button>
        </form>
    </Container>




}

