import React from 'react'

type ButtonDispatchProps = {
    increment: React.Dispatch<React.SetStateAction<number>>
}
export const ButtonDispatch = ({increment }: ButtonDispatchProps) => {
  return <button onClick={() => increment((number) => number + 1)}>Increment</button>
}
