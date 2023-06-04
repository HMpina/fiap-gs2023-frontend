import React from "react";
import { Container } from "react-bootstrap";
import "../Header/index.css"

const Footer: React.FC = () => {
  return (
    <footer className="text-center mt-5 py-4 bg-green1">
      <Container>
        <p>&copy; 2023 FIAPlantação. Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;
