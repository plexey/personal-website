import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import baseStyles from '../baseStyles';
import Header from './Header';
import ContentHeader from './ContentHeader';
import Content from './Content';
import Footer from './Footer';

const theme = {
  brandColor: 'hsl(170, 100%, 60%)',
  headingFont: `'Walter Turncoat', cursive`,
  font: `'Oxygen', sans-serif`,
  mainGridTemplateColums: '[cline-1] 15% [cline-2] auto [cline-3] 15% [cline-4]'
}

const Main = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: [main1] 60px [main2] 190px [main3] auto [main4] 80px [main5];
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