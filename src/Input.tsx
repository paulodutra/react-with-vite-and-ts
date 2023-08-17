import React, { ComponentProps } from 'react'

type InputProps =  ComponentProps<"input"> & {
    label: string
    id: string
}

export const Input = ({id, label, ...props}: InputProps) => {
  return (
    <div style={{marginBottom: "1rem"}}>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} type='text' {...props} />
    </div>
  )
}
