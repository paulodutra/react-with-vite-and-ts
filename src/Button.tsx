import React, { ReactNode } from 'react'

type ButtonProps = {
    lenghtButton?: string;
    children: ReactNode;
    onClick?: () => void
};
export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} style={{fontSize: props.lenghtButton}}>
        {props.children}
    </button>
  )
}
