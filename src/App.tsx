import React from 'react';
import { Input } from './Input';

interface Sales {
  id: string,
  nome: string,
  preco: number,
  status: string,
  pagamento: string,
  data: string
}
function App() {
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [data, setData] = React.useState<null | Sales[]>(null);

  React.useEffect(() => {
    if (startDate && endDate) {
      fetch(`https://data.origamid.dev/vendas?inicio=${startDate}&final=${endDate}`)
        .then(results => results.json())
        .then(results => setData(results as Sales[]))
        .catch(error => console.error(error));
    }
  }, [startDate, endDate])

  return (
    <div>
      <div>
        <Input label='startDate' type='date' setState={setStartDate} name='startDate' id='startDate' value={startDate} />
        <Input label='endDate' type='date' setState={setEndDate} name='endDate' id='endDate' value={endDate} />
      </div>
      <ul>
        {data !== null && data.map((sale) => <li key={sale.id}>{sale.nome} - {sale.status}</li>)}
      </ul>
    </div>

  )
}

export default App
