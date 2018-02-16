import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import baseStyles from '../baseStyles';
import Header from './Header';
import Content from './Content';

const theme = {
  font: `'Oxygen', sans-serif`,
}

export default class App extends React.Component {
  render() {
    baseStyles()
    return (
        <ThemeProvider theme={theme}>
          <div>
            <Header />
            <Content />
          </div>
        </ThemeProvider>
    );
  }
}