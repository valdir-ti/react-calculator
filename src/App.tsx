import React from 'react';
import { Body } from './components/Body';
import { Result } from './components/Result';
import { Container, Header, Title, AppContainer } from './styles';
import { GlobalStyle } from './styles/globals';

export function App() {
  return (
    <Container>
      <Header>
        <Title>
          Calculator App
        </Title>
      </Header>
      <AppContainer>
        <Result />
        <Body />
      </AppContainer>
      <GlobalStyle />
    </Container>
  );
}
