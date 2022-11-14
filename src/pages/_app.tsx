import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globals";
import { dark } from "../styles/themes/dark";
import { useApollo } from "../apollo/client";
import { ApolloProvider } from "@apollo/client";

import "@fontsource/inter";


export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  
  return (
    <ThemeProvider theme={dark}>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
}
