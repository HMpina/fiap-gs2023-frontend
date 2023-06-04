import React from "react";
import { Container } from "react-bootstrap";
import "../Header/index.css"
import { BsGithub } from "react-icons/bs"; // Importação de ícones


const Footer: React.FC = () => {
  return (
    <footer className="text-center mt-5 py-4 bg-green1">
      <Container>
        <p>&copy; 2023 FIAPlantação. Todos os direitos reservados.</p>
        <p className="mt-2">Henrique Aslan Marques Pina</p>
        <p>RA92542</p>
        <div>
        <BsGithub /> HMpina
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
