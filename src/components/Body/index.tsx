import React from 'react'
import { Button } from '../Button'
import { Container } from './styles'

export function Body() {
  return <Container>
      <Button name='AC' background='#fff' value='AC'/>
      <Button name='()' background='#fff' value='()'/>
      <Button name='%' background='#fff' value='%'/>
      <Button name='+' background='#fff' value='+'/>
      <Button name='1' value='1'/>
      <Button name='2' value='2'/>
      <Button name='3' value='3'/>
      <Button name='-' background='#fff' value='-'/>
      <Button name='4' value='4'/>
      <Button name='5' value='5'/>
      <Button name='6' value='6'/>
      <Button name='x' background='#fff' value='x'/>
      <Button name='7' value='7'/>
      <Button name='8' value='8'/>
      <Button name='9' value='9'/>
      <Button name='/' background='#fff' value='/'/>
      <Button name='0' value='0'/>
      <Button name='.' value='.'/>
      <Button name='<=' background='#fff' value='return'/>
      <Button name='=' background='#fff' value='total'/>
  </Container>
}
