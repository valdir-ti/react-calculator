import React from 'react'
import { Button as ButtonApp } from './styles'

interface IButton {
    name: string;
    background?: string;
    value?: string;
}

export function Button({ name, background = '#b5b5c4', value }: IButton) {
    function handleClick () {
        alert(`handleButton clicked ${value}`)
    }

    return <ButtonApp style={{backgroundColor: background}} onClick={handleClick}>{name}</ButtonApp>
}