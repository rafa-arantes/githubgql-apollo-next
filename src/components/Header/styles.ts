import styled, { DefaultTheme } from "styled-components";
import {
  getColorFromThemeProps,
  getFontColorFromThemeProps,
  getFontSizeFromThemeProps,
  getSpacingFromThemeProps,
} from "../../styles/utils";

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 770px;
`;
export const HeaderLineDivider = styled.div`
  width: 100%;
  max-width: 770px;
  height: 1px;
  background-color: ${(props) => getColorFromThemeProps(props, "container")};
`;

export const ReturnButton = styled.div`
  border: none;
  background-color: transparent;
  font-size: ${(props) => getFontSizeFromThemeProps(props, "medium")};
  color: ${(props) => getFontColorFromThemeProps(props, "highlight")};
  margin-right: ${(props) => getSpacingFromThemeProps(props, "medium")};
  padding: 0;
  margin-top: 3px;
  cursor: pointer;
  font-weight: 600;
`;
