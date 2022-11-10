import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globals";
import { dark } from "../styles/themes/dark";
import "@fontsource/inter";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
