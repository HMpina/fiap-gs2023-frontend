import React, { useState, useEffect } from "react";
import { Container, Card, Button, Carousel } from 'react-bootstrap';
import { useHistory, useParams } from "react-router-dom"
import api from "../../services/api";
import "./index.css";


interface IHint {
  id: number;
  title: string;
  description: string;
  liked: boolean;
  created_at: Date;
  updated_at: Date;
}

const Home: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [hint1, setHint1] = useState<IHint>();
  const [hint2, setHint2] = useState<IHint>();
  const [hint3, setHint3] = useState<IHint>();

  function back() {
    history.goBack();
  }

  async function findHint1() {
    const response = await api.get<IHint>(`/hints/1`);
    setHint1(response.data);
  }

  async function findHint2() {
    const response = await api.get<IHint>(`/hints/2`);
    setHint2(response.data);
  }

  async function findHint3() {
    const response = await api.get<IHint>(`/hints/3`);
    setHint3(response.data);
  }

  function viewHint(){
    history.push("/dicas")
}

  useEffect(() => {
    findHint1();
    findHint2();
    findHint3();
  }, []);

  return (
    <Container>
      <Card className="text-center my-4 jumbocard">
        <Card.Body>
          <Card.Title>Bem-vindo ao FIAPlantação</Card.Title>
          <Card.Text>Compartilhe dicas sobre agricultura sustentável</Card.Text>
        </Card.Body>
      </Card>

      <h2>Sobre</h2>
      <p>Bem-vindo ao nosso site! Aqui na FIAPlantação, nos dedicamos a promover práticas de agricultura sustentável para um futuro mais verde e saudável. Nossa missão é fornecer dicas valiosas e informações relevantes sobre cultivo orgânico, conservação de recursos naturais e técnicas ecoamigáveis. Acreditamos que cada um de nós pode fazer a diferença, e é por isso que estamos comprometidos em compartilhar conhecimento e inspirar a comunidade agrícola a adotar práticas sustentáveis. Explore nosso site e descubra como você pode se envolver nessa jornada rumo a um mundo mais sustentável e abundante.</p>

      <Carousel
        prevIcon={null}
        nextIcon={null}
      >
        <Carousel.Item>
          <Card>
            <Card.Body>
              <Card.Title>{hint1?.title}</Card.Title>
              <Card.Text>
                {hint1?.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <Card.Title>{hint2?.title}</Card.Title>
              <Card.Text>
                {hint2?.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <Card.Title>{hint3?.title}</Card.Title>
              <Card.Text>
              {hint3?.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
  <Card className="text-center">
    <Card.Body>
      <Card.Title>Veja outras dicas</Card.Title>
      <div className="d-flex justify-content-center">
        <Button variant="primary" onClick={viewHint}>Veja mais</Button>
      </div>
    </Card.Body>
  </Card>
</Carousel.Item>

      </Carousel>

      <footer className="text-center mt-5 py-4 bg-light">
        <Container>
          <p>&copy; 2023 FIAPlantação. Todos os direitos reservados.</p>
        </Container>
      </footer>
    </Container>
  );
}

export default Home;
