import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import baseStyles from '../baseStyles';
import Header from './Header';
import ContentHeader from './ContentHeader';
import Content from './Content';
import Footer from './Footer';

const theme = {
  brandColor: 'hsl(130, 80%, 70%)',
  font: `'Oxygen', sans-serif`,
}

const Main = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: [main1] 60px [main2] 190px [main3] auto [main4] 60px [main5];
`

export default class App extends React.Component {
  render() {
    baseStyles()
    return (
      <ThemeProvider theme={theme}>
        <Main>
          <Header />
          <ContentHeader />
          <Content />
          <Footer />
        </Main>
      </ThemeProvider>
    );
  }
}