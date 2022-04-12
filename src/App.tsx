import React from 'react';
import { Button } from './components/Button';
import { Result } from './components/Result';
import { Container, Header, Title, AppContainer } from './style';
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
        <Button />
      </AppContainer>
      <GlobalStyle />
    </Container>
  );
}
