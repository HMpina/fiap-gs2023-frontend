import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom"
import "./index.css";
import api from "../../../services/api";
import moment from "moment";
import { BsPencilSquare } from "react-icons/bs"; // Importação de ícones

interface IHint{
    id: number;
    title: string;
    description: string;
    liked: boolean;
    created_at: Date;
    updated_at: Date;
}
const Detail: React.FC = () => {
 
    const history = useHistory()
    const { id } = useParams<{ id: string }>()
    const [hint, setHint] = useState<IHint>()
    function back(){
        history.goBack()
    }
    async function findHint(){
        const response = await api.get<IHint>(`/hints/${id}`)
        console.log(response)
        setHint(response.data)
    }
    // Quando o param "id" mudar/receber um novo valor, o useEffect será executado chamando o findHint
    useEffect(() => {
        findHint()
    }, [id])

    function editHint(id: number){
        history.push(`/dicas_cadastro/${id}`)
    }

    return (
        <div className="container">
            <br />
            <div className="hint-header">
                <h1>Detalhes da Dica</h1>
                <Button variant="dark" size="sm" onClick={back}>Voltar</Button>
            </div>
            <br />
            <Card style={{ width: '80%' }}>
                <Card.Body>
                    <Card.Title>{hint?.title}</Card.Title>
                    
                    <Card.Text>
                    {hint?.description}
                    <br/>
                    {hint?.liked ? "Otimizado" : "Não otimizado"}
                    <br />
                    <strong>Data de Cadastro: </strong>
                    {moment(hint?.created_at).format('DD/MM/YYYY')}
                    <br />
                    <strong>Data de Atualização: </strong>
                    {moment(hint?.updated_at).format('DD/MM/YYYY')}
                    <Button size="sm" variant="primary" onClick={() => editHint(hint!.id)}>
                                        <BsPencilSquare /> {/* Ícone de lápis */} Editar
                                        </Button>{' '}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
 
export default Detail;