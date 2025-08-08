import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function VehicleForm({ id }) {
  const [form, setForm] = useState({
    veiculo: '',
    marca: '',
    ano: '',
    descricao: '',
    vendido: false
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`/veiculos/${id}`).then(res => setForm(res.data));
    }
  }, [id]);

  const salvar = () => {
    const metodo = id ? axios.put : axios.post;
    const url = id ? `/veiculos/${id}` : '/veiculos';

    metodo(url, form).then(() => navigate('/'));
  };

  return (
    <div>
      <input placeholder="Veículo" value={form.veiculo}
        onChange={e => setForm({ ...form, veiculo: e.target.value })} />
      <br />
      <input placeholder="Marca" value={form.marca}
        onChange={e => setForm({ ...form, marca: e.target.value })} />
      <br />
      <input placeholder="Ano" type="number" value={form.ano}
        onChange={e => setForm({ ...form, ano: parseInt(e.target.value) })} />
      <br />
      <textarea placeholder="Descrição"
        value={form.descricao}
        onChange={e => setForm({ ...form, descricao: e.target.value })} />
      <br />
      <label>
        Vendido?
        <input type="checkbox" checked={form.vendido}
          onChange={e => setForm({ ...form, vendido: e.target.checked })} />
      </label>
      <br />
      <button onClick={salvar}>Salvar</button>
    </div>
  );
}
