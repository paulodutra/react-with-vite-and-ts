import React from 'react';
import { Button } from './Button';
import { Input } from './Input';

function App() {
  const [total, setTotal] = React.useState(0)
  const [data, setData] = React.useState('');

  function increment() {
    setTotal((total) => total + 1)
  }
  return (
    <div>
      <p>Date of schedule: {data}</p>
      <Input id='name' label='Name' />
      <Input id='last-name' label='Last name' />
      <Input id='email' label='Email' type='email' />
      <Input 
        id='date-schedule' 
        label='Date of schedule' 
        type='date' value={data} 
        onChange={(event) => setData(event.currentTarget.value)}
      />
      <Input id='hour-schedule' label='Hour of schedule' type='time' />
      <p>{total}</p>
      <Button
        id='main-button'
        className='btn'
        onClick={increment}
        lenghtButton="1.25rem"
      >
        Aumentar
      </Button>
    </div>
  )
}

export default App
