import React from 'react';
import { Button } from './Button';

function App() {
  const [total, setTotal] = React.useState(0)
  
  function increment() {
    setTotal((total) => total + 1)
  }
  return (
    <div>
      <p>{total}</p>
      <Button onClick={increment} lenghtButton="1.25rem">Aumentar</Button>
    </div>
  )
}

export default App
