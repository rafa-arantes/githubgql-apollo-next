import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  body {
    background: ${props => props.theme.colors.background};
    font-size: 14px;
    font-family: "Inter", sans-serif;
  }
`;