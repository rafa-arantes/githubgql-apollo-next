import styled from "styled-components";
import {
  getColorFromThemeProps,
  getFontColorFromThemeProps,
  getFontSizeFromThemeProps,
} from "../../styles/utils";

export const Input = styled.input`
  height: 70px;
  width: 70%;
  box-sizing: border-box;
  padding-left: 20px;
  border: none;
  border-right: solid 1px
    ${(props) => getColorFromThemeProps(props, "background")};
  background-color: transparent;
  outline: none;
  color: ${(props) => getFontColorFromThemeProps(props, "fadedhighlight")};
  font-size: ${(props) => getFontSizeFromThemeProps(props, "small")};
`;

export const Select = styled.select`
  height: 70px;
  width: 28%;
  box-sizing: border-box;
  padding-left: 20px;
  border: none;
  background-color: transparent;
  outline: none;
  color: ${(props) => getFontColorFromThemeProps(props, "fadedhighlight")};
  font-size: ${(props) => getFontSizeFromThemeProps(props, "small")};
`;
