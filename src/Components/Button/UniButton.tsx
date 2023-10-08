import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import "./UniButton.module.css"
import s from "./UniButton.module.css"
import e from "styles/elements.module.css"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type uniButtonPropsType = DefaultButtonPropsType & {
    name: string
}

export const UniButton: React.FC<uniButtonPropsType> = React.memo((props) => {
    return (
        <button
            className={props.disabled ? `${s.buttonDisabled} ${e.overlay}` : e.overlay}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.name}
        </button>
    )
})
