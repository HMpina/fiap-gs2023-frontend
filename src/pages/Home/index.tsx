import React from 'react';
import { Container, Card, Button, Carousel } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <Container>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Bem-vindo ao FIAPlantação</Card.Title>
          <Card.Text>Compartilhe dicas sobre agricultura sustentável</Card.Text>
          <Button variant="primary" href="#about">Saiba mais</Button>
        </Card.Body>
      </Card>

      <Carousel>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <Card.Title>Título do Card 1</Card.Title>
              <Card.Text>
                Conteúdo curto do Card 1.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card>
            <Card.Body>
              <Card.Title>Título do Card 2</Card.Title>
              <Card.Text>
                Conteúdo curto do Card 2.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card>
            <Card.Body>
              <Card.Title>Título do Card 3</Card.Title>
              <Card.Text>
                Conteúdo curto do Card 3.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card>
            <Card.Body>
              <Card.Title>Veja mais</Card.Title>
              <Button variant="primary" href="#mais">Veja mais</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>

      <h2>Sobre</h2>
      <p>Bem-vindo ao nosso site! Aqui na FIAPlantação, nos dedicamos a promover práticas de agricultura sustentável para um futuro mais verde e saudável. Nossa missão é fornecer dicas valiosas e informações relevantes sobre cultivo orgânico, conservação de recursos naturais e técnicas ecoamigáveis. Acreditamos que cada um de nós pode fazer a diferença, e é por isso que estamos comprometidos em compartilhar conhecimento e inspirar a comunidade agrícola a adotar práticas sustentáveis. Explore nosso site e descubra como você pode se envolver nessa jornada rumo a um mundo mais sustentável e abundante.</p>

      <h2>Contato</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu purus in leo molestie auctor. Sed vitae consectetur velit. Fusce maximus nunc enim, nec rutrum justo fermentum a. Suspendisse potenti. Curabitur consectetur metus a ante lobortis commodo.</p>

      <footer className="text-center py-4 bg-light">
        <Container>
          <p>&copy; 2023 FIAPlantação. Todos os direitos reservados.</p>
        </Container>
      </footer>
    </Container>
  );
}

export default Home;
