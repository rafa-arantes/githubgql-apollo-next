import styled, { DefaultTheme } from "styled-components";
import { Colors, getSpacingFromThemeProps, getColorFromThemeProps, getFontSizeFromThemeProps, getFontColorFromThemeProps } from "../../../styles/utils";

type ButtonProps = {
  theme: DefaultTheme;
  disabled: boolean;
};

export const Button = styled.button`
  padding-top: ${(props: ButtonProps) => getSpacingFromThemeProps(props, "small")};
  padding-bottom: ${(props: ButtonProps) => getSpacingFromThemeProps(props, "small")};
  padding-left: ${(props: ButtonProps) => getSpacingFromThemeProps(props, "medium")};
  padding-right: ${(props: ButtonProps) => getSpacingFromThemeProps(props, "medium")};
  background-color: ${(props: ButtonProps) => getColorFromThemeProps(props, props.disabled ? 'background' : 'container')};
  font-size: ${(props:ButtonProps) => getFontSizeFromThemeProps(props, 'medium')};
  color: ${(props: ButtonProps) => getFontColorFromThemeProps(props, 'highlight')};
  font-weight: 600;
  cursor: pointer;
  border: none;
  border-radius: 5px
`;
