import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import moment from "moment";
import "./Form/index.css";
import { BsTrashFill } from "react-icons/bs"; // Importação do ícone de lixeira

 
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
                <h1>Dicas</h1>
                <Button variant="dark" size="sm" onClick={newHint}>Nova Dica</Button>
            </div>
            <br />
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Data de Atualização</th>
                    <th>Status</th>
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
                                <td>{hint.liked ? "Curtido" : "Não curtido"}</td>
                                <td>
                                    <Button size="sm" variant="primary" onClick={() => editHint(hint.id)}>Editar</Button>{' '}
                                    <Button size="sm" variant="success" onClick={() => likedHint(hint.id)}>Curtir</Button>{' '}
                                    <Button size="sm" variant="warning" onClick={() => viewHint(hint.id)}>Visualizar</Button>{' '}
                                    <Button size="sm" variant="danger" onClick={() => deleteHint(hint.id)}>
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