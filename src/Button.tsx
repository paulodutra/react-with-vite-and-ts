import React from 'react'

type ButtonProps = React.ComponentProps<"button"> & {
    lenghtButton?: string
}
export const Button = ({children, lenghtButton, ...props}: ButtonProps) => {
  return (
    <button 
        style={{fontSize: lenghtButton}}
        {...props}
    >
        {children}
    </button>
  )
}
