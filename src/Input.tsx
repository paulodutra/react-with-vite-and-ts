import React, { ComponentProps } from 'react'

type InputProps =  ComponentProps<"input"> & {
    label: string
    id: string
    setState: React.Dispatch<React.SetStateAction<string>>
}

export const Input = ({id, label, setState, ...props}: InputProps) => {
  return (
    <div style={{marginBottom: "1rem"}}>
        <label htmlFor={id}>{label}</label>
        <input 
          id={id} 
          name={id} 
          type='text' 
          onChange={({currentTarget}) => setState(currentTarget.value)} 
          {...props}
        />
    </div>
  )
}
