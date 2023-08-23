import React, { useEffect } from 'react';
import { ButtonDispatch } from './ButtonDispatch';

function user() {
  return {
    name: 'John',
    occupation: 'Software Developer'
  }
}

type User = {
  name: string,
  occupation: string
}
function App() {
  const [data, setData] = React.useState<null | User>(null);
  const [total, setTotal] = React.useState(0);
  useEffect(() => {
    setTimeout(() => {
      setData(user())
    }, 1000)
  }, []);

  return (
    <>    
      <div>
        <p>Total: {total}</p>
        <ButtonDispatch increment={setTotal} />
      </div>
      <div>
        {data !== null && <div>{data.name} - {data.occupation}</div>}
      </div>
    </>

  )
}

export default App
