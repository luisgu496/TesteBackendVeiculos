import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Estatisticas() {
  const [naoVendidos, setNaoVendidos] = useState(0);
  const [porMarca, setPorMarca] = useState({});
  const [porDecada, setPorDecada] = useState({});
  const [recentes, setRecentes] = useState([]);

  useEffect(() => {
    axios.get('/estatisticas/nao-vendidos').then(res => setNaoVendidos(res.data.naoVendidos));
    axios.get('/estatisticas/por-marca').then(res => setPorMarca(res.data));
    axios.get('/estatisticas/por-decada').then(res => setPorDecada(res.data));
    axios.get('/estatisticas/ultima-semana').then(res => setRecentes(res.data));
  }, []);

  return (
    <div>
      <h3>Não vendidos: {naoVendidos}</h3>

      <h3>Por Marca</h3>
      <ul>
        {Object.entries(porMarca).map(([marca, qtd]) => (
          <li key={marca}>{marca}: {qtd}</li>
        ))}
      </ul>

      <h3>Por Década</h3>
      <ul>
        {Object.entries(porDecada).map(([decada, qtd]) => (
          <li key={decada}>Década {decada}: {qtd}</li>
        ))}
      </ul>

      <h3>Últimos veículos cadastrados</h3>
      <ul>
        {recentes.map(v => (
          <li key={v.id}>{v.veiculo} ({v.created})</li>
        ))}
      </ul>
    </div>
  );
}
