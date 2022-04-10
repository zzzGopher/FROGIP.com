/** @format */

import GlobalStyle from "../styles/global-styles";
import {ThemeProvider} from "styled-components";
import {Layout} from "../Components/Layout";

const theme = {
	color: {primary: "#FF8A00", secondary: "#AEAEAE"},
	screen: {
		xs: "420px",
		small: "567px",
		medium: "768px",
		large: "992px",
		xl: "1200px",
		xxl: "1400px",
	},
};

function MyApp({Component, pageProps}) {
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
