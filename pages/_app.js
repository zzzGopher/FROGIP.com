/** @format */

// import GlobalStyle from "../styles/global-styles";
import { ThemeProvider } from "styled-components";
import { Layout } from "../Components/Layout";
import GlobalStyle from "../styles/global-styles";

export const theme = {
  color: { primary: "#FF8A00", secondary: "#AEAEAE" },
  screen: {
    xs: "420px",
    small: "567px",
    medium: "768px",
    large: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
  font: {
    sm: "calc(8px + 1vw)",
    md: "calc(16px + 1.5vw)",
    lg: "calc(18px + 1.8vw)",
    xl: "calc(32px + 3vw)",
    paragraph: "calc(12px + 1vw)",
  },
  margin: {
    base: "5rem",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ThemeProvider>
  );
}

export default MyApp;
