import { createGlobalStyle } from "styled-components";
import { getColorFromThemeProps } from "./utils";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  body {
    background: ${(props) => getColorFromThemeProps(props, "background")};
    font-size: 14px;
    font-family: "Inter", sans-serif;
  }
`;
