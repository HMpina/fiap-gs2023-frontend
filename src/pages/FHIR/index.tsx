import React from 'react';
import { Container } from 'react-bootstrap';

const FHIR: React.FC = () => {
  return (
    <Container>
      <h2>Vantagens do FHIR</h2>
      <h4 className='mt-2'>Indicação do problema:</h4>
        <p>
            Um problema comum na agricultura sustentável é a falta de compartilhamento eficiente de dados entre os agricultores, pesquisadores e especialistas. Muitas vezes, essas informações estão dispersas em diferentes sistemas e formatos, dificultando a colaboração e a busca por soluções inovadoras. A falta de um sistema unificado impede o acesso rápido a dados relevantes, limitando o potencial de aprendizado e melhoria contínua.
        </p>
      <h4 className='mt-2'>Apresentação da solução:</h4>
        <p>
            Você pode propor a criação de uma plataforma web que utilize a tecnologia FHIR para padronizar e compartilhar dados relacionados à agricultura sustentável. Essa plataforma permitiria que agricultores, pesquisadores e especialistas colaborassem, compartilhassem informações e obtivessem insights valiosos para melhorar as práticas agrícolas sustentáveis.
        </p>
      <h4 className='mt-2'>Front-end desenvolvido:</h4>
        <p>
            No front-end da aplicação existente, você pode incluir recursos para visualização e interação com os dados relacionados à agricultura sustentável. Isso pode incluir a exibição de gráficos, tabelas e outros elementos visuais que apresentam informações relevantes para os usuários. Além disso, você pode implementar recursos de pesquisa e filtragem para facilitar a descoberta e o acesso aos dados desejados.
        </p>
      <h4 className='mt-2'>Consumo de dados FHIR:</h4>
        <p>
            Para incorporar o FHIR ao seu projeto, você pode utilizar a API FHIR da Microsoft para recuperar e armazenar os dados relacionados à agricultura sustentável. Ao desenvolver as funcionalidades de interação com os usuários, você pode fazer chamadas à API FHIR para recuperar informações relevantes, como práticas agrícolas recomendadas, estatísticas de produção sustentável, dados climáticos e muito mais. Esses dados podem ser consumidos e exibidos na plataforma web para fornecer insights valiosos aos usuários.
        </p>
      <h4 className='mt-2'>Back-end desenvolvido:</h4>
        <p>
            No back-end da aplicação, você precisará implementar a lógica para integrar a API FHIR e realizar as operações de leitura e gravação de dados. Utilize a documentação do Azure FHIR para aprender como se conectar ao serviço FHIR e fazer as chamadas adequadas para recuperar e armazenar os dados necessários. Certifique-se de seguir as melhores práticas de segurança e privacidade para proteger as informações dos usuários.
        </p>
      <p className='mt-4'>
        Com essas modificações, você estará utilizando o FHIR para criar uma solução que permita o compartilhamento de dados consistentes e unificados na nuvem, semelhante ao que é proposto para a área da saúde. Dessa forma, você estará atendendo aos requisitos do segundo trabalho da faculdade, ao mesmo tempo em que melhora seu projeto atual sobre agricultura sustentável.
      </p>
    </Container>
  );
}

export default FHIR;
