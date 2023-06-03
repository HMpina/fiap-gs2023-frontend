import React from 'react';
import { Container, Card, Button, Carousel } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Home: React.FC = () => {
  return (
    <Container>
      <Card className="text-center" style={{ maxWidth: '400px', margin: 'auto' }}>
        <Card.Body>
          <Card.Title>Bem-vindo ao FIAPlantação</Card.Title>
          <Card.Text>Compartilhe dicas sobre agricultura sustentável</Card.Text>
        </Card.Body>
      </Card>

      <h2 className="mt-5">Sobre</h2>
      <p>Bem-vindo ao nosso site! Aqui na FIAPlantação, nos dedicamos a promover práticas de agricultura sustentável para um futuro mais verde e saudável. Nossa missão é fornecer dicas valiosas e informações relevantes sobre cultivo orgânico, conservação de recursos naturais e técnicas ecoamigáveis. Acreditamos que cada um de nós pode fazer a diferença, e é por isso que estamos comprometidos em compartilhar conhecimento e inspirar a comunidade agrícola a adotar práticas sustentáveis. Explore nosso site e descubra como você pode se envolver nessa jornada rumo a um mundo mais sustentável e abundante.</p>
      <Button variant="primary" href="#about">Saiba mais</Button>


      <Carousel
        prevIcon={<BsChevronLeft style={{ color: 'black', fontSize: '24px' }} />}
        nextIcon={<BsChevronRight style={{ color: 'black', fontSize: '24px' }} />}
      >
        <Carousel.Item>
          <Card>
            <Card.Body className="mx-3">
              <Card.Title>Título do Card 1</Card.Title>
              <Card.Text>
                Conteúdo curto do Card 1
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Body className="mx-3">
              <Card.Title>Título do Card 2</Card.Title>
              <Card.Text>
                Conteúdo curto do Card 2
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Body className="mx-3">
              <Card.Title>Título do Card 3</Card.Title>
              <Card.Text>
                Conteúdo curto do Card 3
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Body className="mx-3">
              <Card.Title>Veja Mais</Card.Title>
              <Button variant="primary">Veja mais</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>

      <footer className="text-center py-4 mt-5 bg-light">
        <Container>
          <p>&copy; 2023 FIAPlantação. Todos os direitos reservados.</p>
        </Container>
      </footer>
    </Container>
  );
}

export default Home;
