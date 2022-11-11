import styled, { DefaultTheme, ThemedStyledProps } from "styled-components";
import {
  FontColors,
  FontSizes,
  getFontColorFromThemeProps,
  getFontSizeFromThemeProps,
} from "../../../styles/utils";

type TypographyType = {theme: DefaultTheme, fontColor?: FontColors, fontSize?: FontSizes }

export const TitleText = styled.h2`
  font-family: "Inter";
  font-weight: 600;
  font-size: ${(props: TypographyType) => getFontSizeFromThemeProps(props, "large")};
  color: ${(props: TypographyType) => getFontColorFromThemeProps(props, "title")};
`;

export const ContentText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  font-size: ${(props: TypographyType) => getFontSizeFromThemeProps(props, "small")};
  color: ${(props: TypographyType) => getFontColorFromThemeProps(props, "content")};
`;

export const HighlightText = styled.p`
  font-family: "Inter";
  font-weight: 600;
  line-height: 24px;
  font-size: ${(props: TypographyType) => getFontSizeFromThemeProps(props, props.fontSize || "medium")};
  color: ${(props: TypographyType) => getFontColorFromThemeProps(props, props.fontColor || "highlight")};
`;
