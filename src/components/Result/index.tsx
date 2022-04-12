import React from 'react'
import { History } from '../History'
import { Value } from '../Value'
import { Container } from './styles'

export function Result () {
    return <Container>
        <History />
        <Value />
    </Container>
}