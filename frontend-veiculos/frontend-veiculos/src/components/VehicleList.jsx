import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function VehicleList() {
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    axios.get('/veiculos').then((res) => setVeiculos(res.data));
  }, []);

  const excluir = (id) => {
    if (confirm('Deseja realmente excluir?')) {
      axios.delete(`/veiculos/${id}`).then(() => {
        setVeiculos(veiculos.filter(v => v.id !== id));
      });
    }
  };

  return (
    <table border="1" cellPadding="5">
      <thead>
        <tr>
          <th>ID</th>
          <th>Veículo</th>
          <th>Marca</th>
          <th>Ano</th>
          <th>Vendido</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {veiculos.map(v => (
          <tr key={v.id}>
            <td>{v.id}</td>
            <td>{v.veiculo}</td>
            <td>{v.marca}</td>
            <td>{v.ano}</td>
            <td>{v.vendido ? 'Sim' : 'Não'}</td>
            <td>
              <Link to={`/editar/${v.id}`}>✏️ Editar</Link> |{" "}
              <button onClick={() => excluir(v.id)}>🗑️ Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
