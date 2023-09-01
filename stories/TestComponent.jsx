import React from "react";
import TestComponent from "../Components/TestComponent";
import { ThemeProvider } from "styled-components";
import { theme } from "../pages/_app";
import GlobalStyle from "../styles/global-styles";

export const Test = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TestComponent />
      </ThemeProvider>
    </>
  );
};
