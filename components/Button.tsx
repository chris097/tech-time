import React, { ReactNode } from 'react';

type ButtonProps = {
    name: string | ReactNode
    bg: string
    width: string
    height: string
    color: string
    border: string
    type: "button" | "submit" | "reset"
    handleClick: () => void
}

const Button: React.FC<ButtonProps> = (props) => (
    <button
        onClick={props.handleClick}
        type={props.type}
        className={`
            ${props.bg} 
            ${props.width}
            ${props.height}
            ${props.color} 
            ${props.border}
            rounded-[4px] lg:text-base text-sm whitespace-nowrap hover:opacity-80 font-font-satoshi px-4`
        }>
            {props.name}
    </button>
);

export default Button;