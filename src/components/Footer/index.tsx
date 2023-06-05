import React from "react";
import { Container } from "react-bootstrap";
import "../Header/index.css"
import { BsGithub } from "react-icons/bs"; // Importação de ícones


const Footer: React.FC = () => {
  return (
    <footer className="text-center mt-5 py-4 bg-green1">
      <Container>
        <p><b>&copy; 2023 FIAPLANTAÇÃO.</b> Todos os direitos reservados.</p>
        <p className="mt-2">Henrique Aslan Marques Pina  -  RA92542</p>
        <a href="https://fiap-gs-frontend.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <BsGithub /> HMpina
            </a>
      </Container>
    </footer>
  );
};

export default Footer;
