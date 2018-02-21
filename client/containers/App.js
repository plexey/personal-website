import React from "react";
import styled, { ThemeProvider } from "styled-components";
import baseStyles from "../baseStyles";
import Header from "./Header";
import ContentHeader from "./ContentHeader";
import Content from "./Content";
import Footer from "./Footer";

const theme = {
  brandColor: "hsl(170, 100%, 60%)",
  brandColorDark: "hsl(170, 100%, 40%)",
  buttonActive: "hsl(170, 100%, 80%)",
  headingFont: `'Walter Turncoat', cursive`,
  font: `'Oxygen', sans-serif`,
  textColor: `hsl(0, 0%, 20%)`,
  deskGridTempCol: "[cline-1] 20% [cline-2] auto [cline-3] 20% [cline-4]",
  tabGridTempCol: "[cline-1] 10% [cline-2] auto [cline-3] 10% [cline-4]",
  phoneGridTempCol: "[cline-1] 15px [cline-2] auto [cline-3] 15px [cline-4]"
};

const Main = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: [main1] 60px [main2] 190px [main3] auto [main4] 80px [main5];

  @media screen and (max-width: 1000px) {
    grid-template-rows: [main1] 50px [main2] 130px [main3] auto [main4] 60px [main5];
  }
`;

export default class App extends React.Component {
  render() {
    baseStyles();
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
