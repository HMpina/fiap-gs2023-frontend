import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import moment from "moment";
import "./Form/index.css";
import { BsTrashFill, BsPencilSquare, BsHandThumbsUp, BsFillEyeFill } from "react-icons/bs"; // Importação de ícones


 
interface IHint{
    id: number;
    title: string;
    description: string;
    liked: boolean;
    created_at: Date;
    updated_at: Date;
}
 
const Hints: React.FC = () => {
 
    const [hints, setHints] = useState<IHint[]>([])
    const history = useHistory()
 
    useEffect(() => {
        loadHints()
    }, [])
 
    async function loadHints() {
        const response = await api.get(`/hints`)
        console.log(response);
        setHints(response.data)
    }
 
    function formatDate(date: Date){
        return moment(date).format('DD/MM/YYYY')
    }
 
    function newHint(){
        history.push(`/dicas_cadastro`)
    }
 
    function editHint(id: number){
        history.push(`/dicas_cadastro/${id}`)
    }
    function viewHint(id: number){
        history.push(`/dicas/${id}`)
    }
    async function likedHint(id: number){
        await api.patch(`/hints/${id}`)
        loadHints()
    }
    async function deleteHint(id: number){
        await api.delete(`/hints/${id}`)
        loadHints()
    }
    return (
        
        <div className="container">
            <br />
            <div className="hint-header">
                <h2>Dicas</h2>
                <Button variant="dark" size="sm" onClick={newHint}>Nova Dica</Button>
            </div>
            <br />
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Data de Atualização</th>
                    <th>FHIR?</th>
                    <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        hints.map(hint => (
                            <tr key={hint.id}>
                                <td>{hint.id}</td>
                                <td>{hint.title}</td>
                                <td>{formatDate(hint.updated_at)}</td>
                                <td>{hint.liked ? "Otimizado" : "Não otimizadoo"}</td>
                                <td>
                                    <Button size="sm" variant="primary" onClick={() => editHint(hint.id)}>
                                        <BsPencilSquare /> {/* Ícone de lápis */} Editar
                                        </Button>{' '}
                                    <Button size="sm" variant="success" onClick={() => likedHint(hint.id)}>
                                        <BsHandThumbsUp /> {/* Ícone de joinha */} Otimizar para FHIR
                                    </Button>{' '}
                                    <Button size="sm" variant="warning" onClick={() => viewHint(hint.id)}>
                                        <BsFillEyeFill /> {/* Ícone de joinha */} Visualizar
                                    </Button>{' '}
                                    <Button size="sm" variant="outline-danger" onClick={() => deleteHint(hint.id)}>
                                        <BsTrashFill /> {/* Ícone de lixeira */}
                                    </Button>{" "}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}
 
export default Hints;