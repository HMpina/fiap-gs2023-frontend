import React from 'react';
import { Container } from 'react-bootstrap';

const Sobre: React.FC = () => {
  return (
    <Container>
      <h2 className='my-4'>Sobre nós</h2>
      <p className='my-3'>
        Somos a FIAPlantação, uma equipe apaixonada pela agricultura sustentável e comprometida em promover um futuro mais verde e saudável. Nossa jornada começou com a visão de criar um ambiente agrícola que respeite a natureza, conserve os recursos naturais e forneça alimentos saudáveis para todos.
      </p>
      <p className='my-3'>
        Aqui, acreditamos que a agricultura sustentável é a chave para enfrentar os desafios ambientais e alimentares que o mundo enfrenta atualmente. Trabalhamos em estreita colaboração com agricultores, pesquisadores e comunidades para desenvolver e compartilhar práticas inovadoras que minimizem o impacto ambiental, preservem a biodiversidade e promovam a saúde do solo.
      </p>
      <p className='my-3'>
        Nossa equipe é formada por especialistas em diferentes áreas, como permacultura, agroecologia e agricultura orgânica. Combinamos o conhecimento tradicional com as mais recentes descobertas científicas para criar soluções práticas e sustentáveis para os desafios agrícolas.
      </p>
      <p className='my-3'>
        Além disso, valorizamos a educação e a conscientização. Realizamos workshops, palestras e programas de capacitação para disseminar informações sobre práticas agrícolas sustentáveis e incentivar a participação da comunidade.
      </p>
      <p className='my-3'>
        Estamos comprometidos em construir um futuro onde a agricultura e o meio ambiente possam prosperar juntos. Junte-se a nós nessa jornada rumo a um mundo mais sustentável e descubra como você pode fazer a diferença através de práticas agrícolas responsáveis. Juntos, podemos cultivar um futuro melhor para as gerações presentes e futuras.
      </p>
    </Container>
  );
}

export default Sobre;
