import React from "react";
import { Container } from 'react-bootstrap';
import { BsGithub } from "react-icons/bs";
import { SiHeroku } from 'react-icons/si';


const Links: React.FC = () => {
    return (
        <Container>
          <h2>Links importantes</h2>
          <p>
        Confira nossos repositório no GitHub:
        <a href="https://github.com/seu-usuario/seu-repositorio" target="_blank" rel="noopener noreferrer">
          <BsGithub /> frontend
        </a>
        <a href="https://github.com/seu-usuario/seu-repositorio" target="_blank" rel="noopener noreferrer">
          <BsGithub /> backend
        </a>
      </p>
          <p className="my-4">
        Veja também em produção:
        <a href="https://fiap-gs-frontend.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <SiHeroku /> frontend
        </a>
        <a href="https://fiap-globalsolut2023-backend.herokuapp.com/hints" target="_blank" rel="noopener noreferrer">
          <SiHeroku /> backend
        </a>
      </p>

        </Container>
      );
    }
    
export default Links;